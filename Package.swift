// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "GlideComponents",
    platforms: [
        .iOS(.v15),
        .macOS(.v12)
    ],
    products: [
        .library(
            name: "GlideComponents",
            targets: ["GlideComponents"]
        ),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "GlideComponents",
            dependencies: [],
            resources: [
                .copy("../../Assets/icons")
            ]
        ),
        .testTarget(
            name: "GlideComponentsTests",
            dependencies: ["GlideComponents"]
        ),
    ]
)