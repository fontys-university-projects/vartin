//
//  InfoCard.swift
//  VerifiedResume
//
//  Created by Valentin on 17/05/2023.
//

import SwiftUI

struct InfoCard: View {
    
    var body: some View {
        ZStack(){
            VStack(alignment: .leading){
                HStack(){
                    Text("ICT & Meadia")
                        .font(.body)
                        .foregroundColor(Color.black)
                        .multilineTextAlignment(.leading)
                        .lineLimit(/*@START_MENU_TOKEN@*/1/*@END_MENU_TOKEN@*/)
                    
                    Text("[31/08/20 - present]")
                        .font(.body)
                        .fontWeight(.light)
                        .foregroundColor(Color.gray)
                        .multilineTextAlignment(.leading)
                    
                    
                }
                HStack(){
                    Text("Fontys Hogescholen")
                        .font(.body)
                        .foregroundColor(Color.black)
                        .multilineTextAlignment(.leading)
                        .lineLimit(/*@START_MENU_TOKEN@*/1/*@END_MENU_TOKEN@*/)
                    Image(systemName: "globe")
                        .foregroundColor(Color.blue)
                    Text("website")
                        .font(.body)
                        .foregroundColor(Color.blue)
                        .underline()
                        .scaledToFit()
                }
            }
            .padding(.horizontal)
        }
        .frame(height: 75.0)
        .background(Color.white)
        .clipShape(RoundedRectangle(cornerRadius: 13.0))
        .shadow(radius: 8)
    }
}

struct InfoCard_Previews: PreviewProvider {
    static var previews: some View {
        InfoCard()
    }
}
