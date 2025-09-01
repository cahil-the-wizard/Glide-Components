import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideAccountButton: View {
    private let profileImageUrl: String?
    private let size: CGFloat
    private let onTap: (() -> Void)?
    
    public init(
        profileImageUrl: String? = nil,
        size: CGFloat = 34,
        onTap: (() -> Void)? = nil
    ) {
        self.profileImageUrl = profileImageUrl
        self.size = size
        self.onTap = onTap
    }
    
    public var body: some View {
        Button(action: { onTap?() }) {
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
                .frame(width: size, height: size)
                .clipShape(Circle())
            } else {
                // Default placeholder with base64 image data
                Circle()
                    .fill(Color(red: 0.85, green: 0.85, blue: 0.85))
                    .frame(width: size, height: size)
                    .overlay(
                        Circle()
                            .stroke(Color.clear, lineWidth: 0)
                    )
            }
        }
        .buttonStyle(PlainButtonStyle())
        .disabled(onTap == nil)
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideAccountButton {
    static func standard(onTap: @escaping () -> Void) -> GlideAccountButton {
        GlideAccountButton(onTap: onTap)
    }
    
    static func small(profileImageUrl: String? = nil, onTap: (() -> Void)? = nil) -> GlideAccountButton {
        GlideAccountButton(profileImageUrl: profileImageUrl, size: 24, onTap: onTap)
    }
    
    static func large(profileImageUrl: String? = nil, onTap: (() -> Void)? = nil) -> GlideAccountButton {
        GlideAccountButton(profileImageUrl: profileImageUrl, size: 48, onTap: onTap)
    }
    
    static func withImage(_ imageUrl: String, size: CGFloat = 34, onTap: (() -> Void)? = nil) -> GlideAccountButton {
        GlideAccountButton(profileImageUrl: imageUrl, size: size, onTap: onTap)
    }
}