//
//  CircleImage.swift
//  VerifiedResume
//
//  Created by Valentin on 15/05/2023.
//

import SwiftUI

struct CircleImage: View {
    let width: CGFloat
    let height: CGFloat
    
    var body: some View {
        Image("default-avatar")
            .resizable()
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
        CircleImage(width: 200.0, height: 200.0)
    }
}
