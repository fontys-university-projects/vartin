//
//  ResumePreview.swift
//  VerifiedResume
//
//  Created by Valentin on 10/05/2023.
//

import SwiftUI
import UIKit

struct ResumePreview: View {
    @ObservedObject public var network: Network
    
    private let adaptveColumns = [
        //        GridItem(.adaptive(minimum: 150.0))
        GridItem(.adaptive(minimum: 250))
    ]
    
    var body: some View {
        
        let userInfo = network.userInfo
        
        VStack(){
            ScrollView(){
                Image("default-cover")
                    .resizable()
                    .clipShape(Rectangle())
                    .frame(height: 250.0, alignment: .top)
                
                ZStack(alignment: .center){
                    CircleImage(avatar_url: userInfo.avatar, width: 200.0, height: 200.0)
                        .offset(y: -150)
                        .padding(.bottom, -150)
                    
                    HStack(){
                        let link = URL(string: "https://www.linkedin.com/in/valentin-stoyanov-9521ab193/")!
                        let customItem = Activity(title: "Tap me!", image: nil) { sharedItems in
                            guard let sharedStrings = sharedItems as? [String] else { return }
                            
                            for string in sharedStrings {
                                print("Here's the string: \(string)")
                            }
                        }
                        
//                        let items = ["Hello, custom activity!"]
//                        let ac = UIActivityViewController(activityItems: items, applicationActivities: [customItem])
//                        ac.excludedActivityTypes = [.postToFacebook]
////                        present(ac, animated: true)
                        
                        
                        Spacer()
                        
                        ShareLink(item: link){
                            VStack(alignment: .center){
                                Image(systemName: "link").resizable().frame(width: 22.0, height: 22.0)
                                Text("share")
                                    .font(.caption)
                                    .fontWeight(.light)
                                    .multilineTextAlignment(.center)
                                    .padding(.top, -5.0)
                            }
                        }
                        .padding(.trailing)
                        .accentColor(/*@START_MENU_TOKEN@*/Color(red: 0.169, green: 0.343, blue: 0.694)/*@END_MENU_TOKEN@*/)
                    }
                }
                
                let fullname = userInfo.cv.firstName + " " + userInfo.cv.lastName
                Text(fullname)
                    .font(.title)
                Text("Developer")
                    .foregroundColor(Color.gray)
                
                VStack(){
                    Section(text: "About me"){
                        Text(userInfo.cv.about ?? ""
                        )
                        .font(/*@START_MENU_TOKEN@*/.body/*@END_MENU_TOKEN@*/)
                        .fontWeight(.light)
                        .foregroundColor(Color.gray)
                        .multilineTextAlignment(.leading)
                        
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Experience"){
                        LazyVGrid(columns: adaptveColumns, alignment: .center, spacing: 10) {
                            ForEach(userInfo.experiences, id: \.self) { exp in
                                InfoCard(first: exp.companyName, second: exp.position, third: "[\(exp.startDate) - \(exp.endDate)]", forth: "https://dhr.is").scaledToFit()
                            }
                        }
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Education & Training"){
                        LazyVGrid(columns: adaptveColumns, alignment: .center, spacing: 10) {
                            ForEach(userInfo.educations, id: \.self) { education in
                                InfoCard(first: education.degree, second: education.institution, third: "[\(education.startDate) - \(education.endDate)]", forth: "https://fontys.fhict.nl").scaledToFit()
                            }
                        }
                    }
                    .padding(.bottom)
                    
                    Section(text: "Skills"){
                        let skillMap = self.getDictOfCategorySkill(skills: userInfo.skills)
                        //                        for (category, skills) in skillMap{
                        //                            SkillCategory(name: userInfo.skills.first?.category, skills: userInfo.skills)
                        //                        }
                        
                        ForEach(Array(skillMap), id: \.0) { category, skills in
                            SkillCategory(name: category, skills: skills)
                        }
                        
                    }
                    .padding(.bottom)
                    
                }.padding()
                
                Spacer()
            }
        }
        .ignoresSafeArea()
        .onAppear(){
            network.getUserInfo(accessToken: "")
            
        }
    }
    func getDictOfCategorySkill(skills:[Skill]) -> [String: [String]]{
        var categoryToSkills: [String: [String]] = [:]
        for skill in skills {
            if var skillsList = categoryToSkills[skill.category!] {
                skillsList.append(skill.name)
                categoryToSkills[skill.category!] = skillsList
            } else {
                categoryToSkills[skill.category!] = [skill.name]
            }
        }
        
        return categoryToSkills
    }
    
}

struct ResumePreview_Previews: PreviewProvider {
    static var previews: some View {
        ResumePreview(network: Network())
    }
}
