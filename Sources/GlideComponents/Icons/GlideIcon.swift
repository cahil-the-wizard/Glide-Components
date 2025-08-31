import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideIcon: View {
    public enum Size {
        case xs     // 12x12
        case sm     // 14x14
        case base   // 16x16
        case md     // 20x20
        case lg     // 24x24
        case xl     // 32x32
        case xxl    // 40x40
        
        var dimension: CGFloat {
            switch self {
            case .xs: return 12
            case .sm: return 14
            case .base: return 16
            case .md: return 20
            case .lg: return 24
            case .xl: return 32
            case .xxl: return 40
            }
        }
    }
    
    private let iconName: String
    private let size: Size
    private let color: Color?
    
    public init(_ iconName: String, size: Size = .base, color: Color? = nil) {
        self.iconName = iconName
        self.size = size
        self.color = color
    }
    
    public var body: some View {
        Group {
            if let bundlePath = Bundle.module.path(forResource: iconName, ofType: "svg", inDirectory: "icons") {
                // For now, we'll use SF Symbols as fallback since SwiftUI doesn't natively support SVG
                // In a real implementation, you'd use a library like SVGKit or convert to PDF/Image
                Image(systemName: mapToSFSymbol(iconName))
                    .font(.system(size: size.dimension - 2))
            } else {
                // Fallback to SF Symbol
                Image(systemName: mapToSFSymbol(iconName))
                    .font(.system(size: size.dimension - 2))
            }
        }
        .foregroundColor(color ?? GlideColors.textPrimary)
        .frame(width: size.dimension, height: size.dimension)
    }
    
    private func mapToSFSymbol(_ iconName: String) -> String {
        // Map common UntitledUI icon names to SF Symbols
        switch iconName {
        case "home-01", "home-02": return "house"
        case "user-01", "user-02", "user-03": return "person"
        case "users-01", "users-02", "users-03": return "person.2"
        case "settings-01", "settings-02", "settings-03": return "gearshape"
        case "bell-01", "bell-02", "bell-03": return "bell"
        case "mail-01", "mail-02", "mail-03": return "envelope"
        case "search-01", "search-02": return "magnifyingglass"
        case "heart", "heart-circle": return "heart"
        case "star-01", "star-02": return "star"
        case "bookmark", "bookmark-add": return "bookmark"
        case "calendar", "calendar-date": return "calendar"
        case "clock", "clock-check": return "clock"
        case "download-01", "download-02": return "arrow.down.circle"
        case "upload-01", "upload-02": return "arrow.up.circle"
        case "share-01", "share-02": return "square.and.arrow.up"
        case "edit-01", "edit-02": return "pencil"
        case "trash-01", "trash-02": return "trash"
        case "plus", "plus-circle": return "plus"
        case "minus", "minus-circle": return "minus"
        case "x", "x-circle": return "xmark"
        case "check", "check-circle": return "checkmark"
        case "arrow-left": return "arrow.left"
        case "arrow-right": return "arrow.right"
        case "arrow-up": return "arrow.up"
        case "arrow-down": return "arrow.down"
        case "chevron-left": return "chevron.left"
        case "chevron-right": return "chevron.right"
        case "chevron-up": return "chevron.up"
        case "chevron-down": return "chevron.down"
        case "eye": return "eye"
        case "eye-off": return "eye.slash"
        case "lock-01", "lock-02": return "lock"
        case "unlock-01", "unlock-02": return "lock.open"
        case "file-01", "file-02": return "doc"
        case "folder", "folder-closed": return "folder"
        case "image-01", "image-02": return "photo"
        case "video-01", "video-02": return "video"
        case "camera-01", "camera-02": return "camera"
        case "microphone-01", "microphone-02": return "mic"
        case "globe-01", "globe-02": return "globe"
        case "wifi": return "wifi"
        case "bluetooth": return "bluetooth"
        case "battery-full": return "battery.100"
        case "battery-low": return "battery.25"
        case "volume-max": return "speaker.3"
        case "volume-min": return "speaker.1"
        case "play": return "play"
        case "pause": return "pause"
        case "stop": return "stop"
        case "refresh-01", "refresh-02": return "arrow.clockwise"
        case "info-circle": return "info.circle"
        case "alert-triangle": return "exclamationmark.triangle"
        case "alert-circle": return "exclamationmark.circle"
        case "help-circle": return "questionmark.circle"
        default: return "square.dashed"
        }
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideIcon {
    // Common icons with semantic names
    static func home(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("home-01", size: size, color: color)
    }
    
    static func user(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("user-01", size: size, color: color)
    }
    
    static func settings(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("settings-01", size: size, color: color)
    }
    
    static func bell(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("bell-01", size: size, color: color)
    }
    
    static func mail(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("mail-01", size: size, color: color)
    }
    
    static func search(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("search-01", size: size, color: color)
    }
    
    static func heart(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("heart", size: size, color: color)
    }
    
    static func star(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("star-01", size: size, color: color)
    }
    
    static func chevronLeft(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("chevron-left", size: size, color: color)
    }
    
    static func chevronRight(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("chevron-right", size: size, color: color)
    }
    
    static func chevronUp(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("chevron-up", size: size, color: color)
    }
    
    static func chevronDown(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("chevron-down", size: size, color: color)
    }
    
    static func plus(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("plus", size: size, color: color)
    }
    
    static func minus(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("minus", size: size, color: color)
    }
    
    static func xmark(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("x", size: size, color: color)
    }
    
    static func checkmark(size: Size = .base, color: Color? = nil) -> GlideIcon {
        GlideIcon("check", size: size, color: color)
    }
}