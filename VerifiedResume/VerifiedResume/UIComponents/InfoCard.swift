//
//  InfoCard.swift
//  VerifiedResume
//
//  Created by Valentin on 17/05/2023.
//

import SwiftUI

struct InfoCard: View {
    
    let first: String
    let second: String
    let third: String
    let forth: String
    
    var body: some View {
        ZStack(){
            VStack(alignment: .leading){
                HStack(){
                    Text(first)
                        .font(.body)
                        .foregroundColor(Color.black)
                        .multilineTextAlignment(.leading)
                        .lineLimit(/*@START_MENU_TOKEN@*/1/*@END_MENU_TOKEN@*/)
                    
                    Text(third)
                        .font(.body)
                        .fontWeight(.light)
                        .foregroundColor(Color.gray)
                        .multilineTextAlignment(.leading)
                    
                    
                }.scaledToFit()
                HStack(){
                    Text(second)
                        .font(.body)
                        .foregroundColor(Color.black)
                        .multilineTextAlignment(.leading)
                        .lineLimit(/*@START_MENU_TOKEN@*/1/*@END_MENU_TOKEN@*/)
                    
                    Image(systemName: "globe")
                        .foregroundColor(Color.blue)
                    Text(forth)
                        .font(.body)
                        .foregroundColor(Color.blue)
                        .underline()
                }
                .scaledToFit()
            }
            .padding(.horizontal)
            .scaledToFit()
        }
        .frame(height: 75.0)
        .background(Color.white)
        .clipShape(RoundedRectangle(cornerRadius: 13.0))
        .shadow(radius: 8)
        .scaledToFit()
    }
}

struct InfoCard_Previews: PreviewProvider {
    static var previews: some View {
        InfoCard(first: "ICT & Media", second: "Fontys Hogeschole", third: "[29/05/20 - present]", forth: "link here")
    }
}
