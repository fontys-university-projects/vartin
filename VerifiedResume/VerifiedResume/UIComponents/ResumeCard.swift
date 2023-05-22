//
//  ResumeCard.swift
//  VerifiedResume
//
//  Created by Valentin on 10/05/2023.
//

import SwiftUI

struct ResumeCard: View {
    let name: String
    let positon: String
    let avatar_url: String
    
    var body: some View {
        ZStack(){
            VStack(alignment: .center) {
                Image("default-cover")
                    .resizable()
                    .clipShape(Rectangle())
                    .frame(height: 100.0)
                CircleImage(avatar_url: avatar_url, width: 100.0, height: 100.0)
                    .offset(y: -50)
                    .padding(.bottom, -50)
                cardText
            }
        }
        .background(Color.white)
        .clipShape(RoundedRectangle(cornerRadius: 13.0))
        .shadow(radius: 8)
    }
    
    var cardText: some View{
        VStack {
            Text(name).foregroundColor(Color.black)
            Text(positon).foregroundColor(Color.black)
        }
        .padding(.bottom)
        .background(Color.white)
    }
}


struct ResumeCard_Previews: PreviewProvider {
    static var previews: some View {
        ResumeCard(name: "Jonh Doe",
                   positon: "Accountant",
                   avatar_url: "")
    }
}
