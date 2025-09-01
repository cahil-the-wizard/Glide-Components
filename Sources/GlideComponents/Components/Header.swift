import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideHeader: View {
    private let onLogoTap: (() -> Void)?
    private let onNotificationTap: (() -> Void)?
    private let onProfileTap: (() -> Void)?
    
    public init(
        onLogoTap: (() -> Void)? = nil,
        onNotificationTap: (() -> Void)? = nil,
        onProfileTap: (() -> Void)? = nil
    ) {
        self.onLogoTap = onLogoTap
        self.onNotificationTap = onNotificationTap
        self.onProfileTap = onProfileTap
    }
    
    public var body: some View {
        HStack {
            Spacer()
            
            // Right section with notification and profile
            HStack(spacing: 4) {
                // Notification button
                Button(action: { onNotificationTap?() }) {
                    Path { path in
                        // Bell icon SVG path
                        path.move(to: CGPoint(x: 8.925, y: 14.25))
                        path.addCurve(
                            to: CGPoint(x: 12.893, y: 14.25),
                            control1: CGPoint(x: 9.454, y: 14.7168),
                            control2: CGPoint(x: 10.148, y: 15)
                        )
                        
                        // Main bell shape
                        path.move(to: CGPoint(x: 15.409, y: 4.5))
                        path.addCurve(
                            to: CGPoint(x: 6.409, y: 4.5),
                            control1: CGPoint(x: 15.409, y: 0),
                            control2: CGPoint(x: 6.409, y: 0)
                        )
                        
                        // Bell body
                        path.addCurve(
                            to: CGPoint(x: 5.951, y: 11.25),
                            control1: CGPoint(x: 6.409, y: 6.81761),
                            control2: CGPoint(x: 4.355, y: 10.9056)
                        )
                        
                        path.addLine(to: CGPoint(x: 15.867, y: 11.25))
                    }
                    .stroke(Color.black, lineWidth: 2)
                    .frame(width: 18, height: 18)
                }
                .buttonStyle(PlainButtonStyle())
                
                // Profile button
                Button(action: { onProfileTap?() }) {
                    Circle()
                        .fill(Color(red: 0.85, green: 0.85, blue: 0.85))
                        .frame(width: 29.09, height: 29.09)
                        .overlay(
                            // Profile image would go here - using placeholder for now
                            Circle()
                                .stroke(Color.clear, lineWidth: 0)
                        )
                }
                .buttonStyle(PlainButtonStyle())
            }
        }
        .padding(.horizontal, 24)
        .frame(width: 430, height: 48)
        .background(Color.white)
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideHeader {
    static func standard(
        onLogoTap: @escaping () -> Void = {},
        onNotificationTap: @escaping () -> Void = {},
        onProfileTap: @escaping () -> Void = {}
    ) -> GlideHeader {
        GlideHeader(
            onLogoTap: onLogoTap,
            onNotificationTap: onNotificationTap,
            onProfileTap: onProfileTap
        )
    }
}