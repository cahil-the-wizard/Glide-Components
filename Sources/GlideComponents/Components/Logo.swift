import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideLogo: View {
    private let width: CGFloat
    private let height: CGFloat
    private let color: Color
    private let onTap: (() -> Void)?
    
    public init(
        width: CGFloat = 56,
        height: CGFloat = 24,
        color: Color = Color(red: 37/255, green: 43/255, blue: 55/255),
        onTap: (() -> Void)? = nil
    ) {
        self.width = width
        self.height = height
        self.color = color
        self.onTap = onTap
    }
    
    public var body: some View {
        Button(action: { onTap?() }) {
            Path { path in
                // Glide signature logo path
                path.move(to: CGPoint(x: 2, y: 21.11))
                
                path.addCurve(
                    to: CGPoint(x: 25.6063, y: 3.04858),
                    control1: CGPoint(x: 7.56416, y: 9.29729),
                    control2: CGPoint(x: 20.0185, y: -1.45606)
                )
                
                path.addCurve(
                    to: CGPoint(x: 18.1778, y: 21.1099),
                    control1: CGPoint(x: 33.0162, y: 9.02207),
                    control2: CGPoint(x: 24.059, y: 26.0596)
                )
                
                path.addCurve(
                    to: CGPoint(x: 39.9683, y: 6.16832),
                    control1: CGPoint(x: 9.59365, y: 13.8854),
                    control2: CGPoint(x: 32.2095, y: -1.22038)
                )
                
                path.addCurve(
                    to: CGPoint(x: 37.1619, y: 18.1545),
                    control1: CGPoint(x: 46.9139, y: 12.7827),
                    control2: CGPoint(x: 40.128, y: 20.0634)
                )
                
                path.addCurve(
                    to: CGPoint(x: 54, y: 10.9528),
                    control1: CGPoint(x: 31.5492, y: 14.5422),
                    control2: CGPoint(x: 41.619, y: 3.28422)
                )
            }
            .stroke(color, style: StrokeStyle(lineWidth: 2.5, lineCap: .round))
            .frame(width: width, height: height)
        }
        .buttonStyle(PlainButtonStyle())
        .disabled(onTap == nil)
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideLogo {
    static func standard(onTap: @escaping () -> Void) -> GlideLogo {
        GlideLogo(onTap: onTap)
    }
    
    static func small(onTap: (() -> Void)? = nil) -> GlideLogo {
        GlideLogo(width: 28, height: 12, onTap: onTap)
    }
    
    static func large(onTap: (() -> Void)? = nil) -> GlideLogo {
        GlideLogo(width: 112, height: 48, onTap: onTap)
    }
}