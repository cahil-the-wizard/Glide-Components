import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideHeader: View {
    private let onLogoTap: (() -> Void)?
    private let onNotificationTap: (() -> Void)?
    private let onAccountTap: (() -> Void)?
    private let profileImageUrl: String?
    
    public init(
        onLogoTap: (() -> Void)? = nil,
        onNotificationTap: (() -> Void)? = nil,
        onAccountTap: (() -> Void)? = nil,
        profileImageUrl: String? = nil
    ) {
        self.onLogoTap = onLogoTap
        self.onNotificationTap = onNotificationTap
        self.onAccountTap = onAccountTap
        self.profileImageUrl = profileImageUrl
    }
    
    public var body: some View {
        HStack {
            // Logo section
            Button(action: { onLogoTap?() }) {
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
                .stroke(Color(red: 37/255, green: 43/255, blue: 55/255), style: StrokeStyle(lineWidth: 2.5, lineCap: .round))
                .frame(width: 56, height: 20)
            }
            .buttonStyle(PlainButtonStyle())
            .disabled(onLogoTap == nil)
            
            Spacer()
            
            // Right section with notification and account
            HStack(spacing: 8) {
                // Notification button
                Button(action: { onNotificationTap?() }) {
                    GlideIcon("bell-01", size: .sm, color: GlideColors.GrayDark._900)
                        .frame(width: 34, height: 34)
                        .background(Color.clear)
                        .cornerRadius(8)
                }
                .buttonStyle(PlainButtonStyle())
                
                // Account button
                Button(action: { onAccountTap?() }) {
                    if let profileImageUrl = profileImageUrl,
                       let url = URL(string: profileImageUrl) {
                        AsyncImage(url: url) { image in
                            image
                                .resizable()
                                .aspectRatio(contentMode: .fill)
                        } placeholder: {
                            Circle()
                                .fill(Color(red: 0.85, green: 0.85, blue: 0.85))
                        }
                        .frame(width: 34, height: 34)
                        .clipShape(Circle())
                    } else {
                        Circle()
                            .fill(Color(red: 0.85, green: 0.85, blue: 0.85))
                            .frame(width: 34, height: 34)
                    }
                }
                .buttonStyle(PlainButtonStyle())
            }
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 8)
        .frame(minWidth: 340)
        .background(Color.white)
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideHeader {
    static func standard(
        onLogoTap: @escaping () -> Void = {},
        onNotificationTap: @escaping () -> Void = {},
        onAccountTap: @escaping () -> Void = {},
        profileImageUrl: String? = nil
    ) -> GlideHeader {
        GlideHeader(
            onLogoTap: onLogoTap,
            onNotificationTap: onNotificationTap,
            onAccountTap: onAccountTap,
            profileImageUrl: profileImageUrl
        )
    }
}