//
//  SkillCategory.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import SwiftUI

struct SkillCategory: View {
    let name: String
    let skills: [String]
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(name)
                .font(.headline)
                .padding(.vertical, 8)
            LazyHGrid(rows: [GridItem(.flexible())], spacing: 10.0) {
                ForEach(skills, id: \.self) { skill in
                    ZStack{
                        Text(skill)
                    }.padding(.horizontal)
                        .background(Color.white)
                        .clipShape(RoundedRectangle(cornerRadius: 13.0))
                        .shadow(radius: 8)
                    
                }
            }
            .padding(.horizontal, 8)
            
        }
    }
}

struct SkillCategory_Previews: PreviewProvider {
    static var previews: some View {
        SkillCategory(name: "IT", skills: ["C", "C++", "C#", "Python", "Swift"])
    }
}
