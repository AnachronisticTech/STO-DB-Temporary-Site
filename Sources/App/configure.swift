import Vapor
import Leaf
import NIOSSL

// configures your application
public func configure(_ app: Application) throws {
    // uncomment to serve files from /Public folder
     app.middleware.use(FileMiddleware(publicDirectory: app.directory.publicDirectory))
    
    app.views.use(.leaf)
    app.leaf.cache.isEnabled = app.environment.isRelease

    let certPath = Environment.get("CERT_PATH")
    let keyPath = Environment.get("KEY_PATH")
    let hostname = Environment.get("HOSTNAME") ?? "127.0.0.1"
    let port = Environment.get("PORT")
    let portVal: Int
    if let port = port {
        portVal = Int(port) ?? 8080
    } else {
        portVal = 8080
    }

    if let certPath = certPath, let keyPath = keyPath {
        let certs = try! NIOSSLCertificate.fromPEMFile(certPath)
            .map { NIOSSLCertificateSource.certificate($0) }
        let tls = TLSConfiguration.forServer(certificateChain: certs, privateKey: .file(keyPath))

        app.http.server.configuration = .init(
            hostname: hostname,
            port: portVal,
            backlog: 256,
            reuseAddress: true,
            tcpNoDelay: true,
            responseCompression: .disabled,
            requestDecompression: .disabled,
            supportPipelining: false,
            supportVersions: Set<HTTPVersionMajor>([.two]),
            tlsConfiguration: tls,
            serverName: nil,
            logger: nil
        )
    } else {
        app.http.server.configuration.hostname = hostname
        app.http.server.configuration.port = portVal
    }

    // register routes
    try routes(app)
}
