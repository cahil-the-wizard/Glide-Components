import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideTypography {
    
    // MARK: - Title Styles
    public struct Title {
        public static let hero = Font.custom("Futura", size: 72)
            .weight(.medium)
        
        public static let page = Font.custom("Futura", size: 48)
            .weight(.medium)
        
        public static let subtitle = Font.custom("Inter", size: 32)
            .weight(.regular)
    }
    
    // MARK: - Heading Styles
    public struct Heading {
        public static let heading = Font.custom("Inter", size: 24)
            .weight(.semibold)
        
        public static let subheading = Font.custom("Inter", size: 20)
            .weight(.regular)
    }
    
    // MARK: - Body Styles
    public struct Body {
        public static let base = Font.custom("Inter", size: 16)
            .weight(.regular)
        
        public static let emphasis = Font.custom("Inter", size: 16)
            .weight(.regular)
            .italic()
        
        public static let strong = Font.custom("Inter", size: 16)
            .weight(.semibold)
        
        public static let link = Font.custom("Inter", size: 16)
            .weight(.regular)
        
        public static let code = Font.custom("Roboto Mono", size: 16)
            .weight(.regular)
        
        public static let list = Font.custom("Inter", size: 16)
            .weight(.regular)
        
        public static let small = Font.custom("Inter", size: 14)
            .weight(.regular)
        
        public static let medium = Font.custom("Inter", size: 16)
            .weight(.medium)
    }
    
    // MARK: - Convenience Properties
    public static var titleHero: Font { Title.hero }
    public static var titlePage: Font { Title.page }
    public static var subtitle: Font { Title.subtitle }
    public static var heading: Font { Heading.heading }
    public static var subheading: Font { Heading.subheading }
    public static var body: Font { Body.base }
    public static var bodySmall: Font { Body.small }
    public static var bodyMedium: Font { Body.medium }
    public static var bodyStrong: Font { Body.strong }
    public static var bodyEmphasis: Font { Body.emphasis }
    public static var bodyCode: Font { Body.code }
    public static var bodyLink: Font { Body.link }
    public static var bodyList: Font { Body.list }
}

// MARK: - Line Heights and Letter Spacing
@available(iOS 15.0, macOS 12.0, *)
public struct GlideLineHeight {
    public static let titleHero: CGFloat = 86.4
    public static let titlePage: CGFloat = 57.6
    public static let subtitle: CGFloat = 38.4
    public static let heading: CGFloat = 28.8
    public static let subheading: CGFloat = 24
    public static let body: CGFloat = 22.4
    public static let bodySmall: CGFloat = 19.6
    public static let bodyCode: CGFloat = 16
}

@available(iOS 15.0, macOS 12.0, *)
public struct GlideLetterSpacing {
    public static let subtitle: CGFloat = -0.64
    public static let heading: CGFloat = -0.48
    public static let body: CGFloat = 0
}