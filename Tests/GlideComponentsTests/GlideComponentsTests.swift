import XCTest
@testable import GlideComponents

final class GlideComponentsTests: XCTestCase {
    func testVersion() {
        XCTAssertEqual(GlideComponents.version, "1.0.0")
    }
}