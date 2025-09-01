import SwiftUI
#if canImport(UIKit)
import UIKit
#endif

@available(iOS 15.0, macOS 12.0, *)
public struct GlideTextField: View {
    @Binding private var text: String
    private let placeholder: String
    private let isSecure: Bool
    #if os(iOS)
    private let keyboardType: UIKeyboardType
    #endif
    
    #if os(iOS)
    public init(
        _ placeholder: String,
        text: Binding<String>,
        isSecure: Bool = false,
        keyboardType: UIKeyboardType = .default
    ) {
        self.placeholder = placeholder
        self._text = text
        self.isSecure = isSecure
        self.keyboardType = keyboardType
    }
    #else
    public init(
        _ placeholder: String,
        text: Binding<String>,
        isSecure: Bool = false
    ) {
        self.placeholder = placeholder
        self._text = text
        self.isSecure = isSecure
    }
    #endif
    
    public var body: some View {
        VStack {
            if isSecure {
                SecureField(placeholder, text: $text)
            } else {
                TextField(placeholder, text: $text)
                    #if os(iOS)
                    .keyboardType(keyboardType)
                    #endif
            }
        }
        .textFieldStyle(GlideTextFieldStyle())
    }
}

@available(iOS 15.0, macOS 12.0, *)
struct GlideTextFieldStyle: TextFieldStyle {
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .font(GlideTypography.body)
            .padding(12)
            .background(GlideColors.GrayLight._50)
            .cornerRadius(8)
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(GlideColors.border, lineWidth: 1)
            )
    }
}