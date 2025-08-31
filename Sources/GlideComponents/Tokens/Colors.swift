import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideColors {
    
    // MARK: - Gray Light Mode
    public struct GrayLight {
        public static let _25 = Color(red: 253/255, green: 253/255, blue: 253/255)
        public static let _50 = Color(red: 250/255, green: 250/255, blue: 250/255)
        public static let _100 = Color(red: 245/255, green: 245/255, blue: 245/255)
        public static let _200 = Color(red: 233/255, green: 234/255, blue: 235/255)
        public static let _300 = Color(red: 213/255, green: 215/255, blue: 218/255)
        public static let _400 = Color(red: 164/255, green: 167/255, blue: 174/255)
        public static let _500 = Color(red: 113/255, green: 118/255, blue: 128/255)
        public static let _600 = Color(red: 83/255, green: 88/255, blue: 98/255)
        public static let _700 = Color(red: 65/255, green: 70/255, blue: 81/255)
        public static let _800 = Color(red: 37/255, green: 43/255, blue: 55/255)
        public static let _900 = Color(red: 24/255, green: 29/255, blue: 39/255)
        public static let _950 = Color(red: 10/255, green: 13/255, blue: 18/255)
    }
    
    // MARK: - Gray Dark Mode
    public struct GrayDark {
        public static let _25 = Color(red: 250/255, green: 250/255, blue: 250/255)
        public static let _50 = Color(red: 247/255, green: 247/255, blue: 247/255)
        public static let _100 = Color(red: 240/255, green: 240/255, blue: 241/255)
        public static let _200 = Color(red: 236/255, green: 236/255, blue: 237/255)
        public static let _300 = Color(red: 206/255, green: 207/255, blue: 210/255)
        public static let _400 = Color(red: 148/255, green: 151/255, blue: 156/255)
        public static let _500 = Color(red: 133/255, green: 136/255, blue: 142/255)
        public static let _600 = Color(red: 97/255, green: 101/255, blue: 108/255)
        public static let _700 = Color(red: 55/255, green: 58/255, blue: 65/255)
        public static let _800 = Color(red: 34/255, green: 38/255, blue: 47/255)
        public static let _900 = Color(red: 19/255, green: 22/255, blue: 27/255)
        public static let _950 = Color(red: 12/255, green: 14/255, blue: 18/255)
    }
    
    // MARK: - Error Colors
    public struct Error {
        public static let _25 = Color(red: 255/255, green: 251/255, blue: 250/255)
        public static let _50 = Color(red: 254/255, green: 243/255, blue: 242/255)
        public static let _100 = Color(red: 254/255, green: 228/255, blue: 226/255)
        public static let _200 = Color(red: 254/255, green: 205/255, blue: 202/255)
        public static let _300 = Color(red: 253/255, green: 162/255, blue: 155/255)
        public static let _400 = Color(red: 249/255, green: 112/255, blue: 102/255)
        public static let _500 = Color(red: 240/255, green: 68/255, blue: 56/255)
        public static let _600 = Color(red: 217/255, green: 45/255, blue: 32/255)
        public static let _700 = Color(red: 180/255, green: 35/255, blue: 24/255)
        public static let _800 = Color(red: 145/255, green: 32/255, blue: 24/255)
        public static let _900 = Color(red: 122/255, green: 39/255, blue: 26/255)
        public static let _950 = Color(red: 85/255, green: 22/255, blue: 12/255)
    }
    
    // MARK: - Warning Colors
    public struct Warning {
        public static let _25 = Color(red: 255/255, green: 252/255, blue: 245/255)
        public static let _50 = Color(red: 255/255, green: 250/255, blue: 235/255)
        public static let _100 = Color(red: 254/255, green: 240/255, blue: 199/255)
        public static let _200 = Color(red: 254/255, green: 223/255, blue: 137/255)
        public static let _300 = Color(red: 254/255, green: 200/255, blue: 75/255)
        public static let _400 = Color(red: 253/255, green: 176/255, blue: 34/255)
        public static let _500 = Color(red: 247/255, green: 144/255, blue: 9/255)
        public static let _600 = Color(red: 220/255, green: 104/255, blue: 3/255)
        public static let _700 = Color(red: 181/255, green: 71/255, blue: 8/255)
        public static let _800 = Color(red: 147/255, green: 55/255, blue: 13/255)
        public static let _900 = Color(red: 122/255, green: 46/255, blue: 14/255)
        public static let _950 = Color(red: 78/255, green: 29/255, blue: 9/255)
    }
    
    // MARK: - Success Colors
    public struct Success {
        public static let _25 = Color(red: 246/255, green: 254/255, blue: 249/255)
        public static let _50 = Color(red: 236/255, green: 253/255, blue: 243/255)
        public static let _100 = Color(red: 220/255, green: 250/255, blue: 230/255)
        public static let _200 = Color(red: 171/255, green: 239/255, blue: 198/255)
        public static let _300 = Color(red: 117/255, green: 224/255, blue: 167/255)
        public static let _400 = Color(red: 71/255, green: 205/255, blue: 137/255)
        public static let _500 = Color(red: 23/255, green: 178/255, blue: 106/255)
        public static let _600 = Color(red: 7/255, green: 148/255, blue: 85/255)
        public static let _700 = Color(red: 6/255, green: 118/255, blue: 71/255)
        public static let _800 = Color(red: 8/255, green: 93/255, blue: 58/255)
        public static let _900 = Color(red: 7/255, green: 77/255, blue: 49/255)
        public static let _950 = Color(red: 5/255, green: 51/255, blue: 33/255)
    }
    
    // MARK: - Semantic Colors
    public static var primary: Color {
        return Success._600
    }
    
    public static var secondary: Color {
        return GrayLight._100
    }
    
    public static var destructive: Color {
        return Error._500
    }
    
    public static var background: Color {
        return Color(.systemBackground)
    }
    
    public static var surface: Color {
        return GrayLight._25
    }
    
    public static var textPrimary: Color {
        return GrayLight._900
    }
    
    public static var textSecondary: Color {
        return GrayLight._600
    }
    
    public static var border: Color {
        return GrayLight._200
    }
}