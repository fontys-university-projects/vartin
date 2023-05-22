//
//  CircleImage.swift
//  VerifiedResume
//
//  Created by Valentin on 15/05/2023.
//

import SwiftUI

struct CircleImage: View {
    let avatar_url: String
    let width: CGFloat
    let height: CGFloat
    
    
    var body: some View {
        AsyncImage(url: URL(string: avatar_url))
//            .resizable()
            .frame(width: width, height: height)
            .clipShape(Circle())
            .overlay {
                Circle().stroke(.white, lineWidth: 4)
            }
            .shadow(radius: 4)
    }
}

struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage(avatar_url: "", width: 200.0, height: 200.0)
    }
}
