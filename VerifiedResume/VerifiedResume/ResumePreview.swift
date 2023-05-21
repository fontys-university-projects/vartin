//
//  ResumePreview.swift
//  VerifiedResume
//
//  Created by Valentin on 10/05/2023.
//

import SwiftUI

struct ResumePreview: View {
    @ObservedObject public var network: Network
    
    private let adaptveColumns = [
        GridItem(.adaptive(minimum: 150.0))
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
                    CircleImage(width: 200.0, height: 200.0)
                        .offset(y: -150)
                        .padding(.bottom, -150)
                    
                    HStack(){
                        let link = URL(string: "https://www.linkedin.com/in/valentin-stoyanov-9521ab193/")!
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
                        Text(userInfo.cv.about)
                            .font(/*@START_MENU_TOKEN@*/.body/*@END_MENU_TOKEN@*/)
                            .fontWeight(.light)
                            .foregroundColor(Color.gray)
                            .multilineTextAlignment(.leading)
                        
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Skills"){
//                        LazyVGrid(columns: adaptveColumns, spacing: 20) {
//                            ForEach(userInfo.skills, id: \.self) { skill in
//                                InfoCard(first: skill., second: <#T##String#>, third: <#T##String#>, forth: <#T##String#>).scaledToFit()
//                            }
//                        }
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Experience"){
                        LazyVGrid(columns: adaptveColumns, spacing: 20) {
                            ForEach(userInfo.experiences, id: \.self) { exp in
                                InfoCard(first: exp.companyName, second: exp.position, third: "[\(exp.startDate) - \(exp.endDate)]", forth: "https://dhr.is").scaledToFit()
                            }
                        }
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Education & Training"){
//                        LazyVGrid(columns: adaptveColumns, spacing: 20) {
//                            ForEach(userInfo.educations, id: \.self) { skill in
//                                InfoCard(first: skill., second: <#T##String#>, third: <#T##String#>, forth: <#T##String#>).scaledToFit()
//                            }
//                        }
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Languages"){
                        
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
}

struct ResumePreview_Previews: PreviewProvider {
    static var previews: some View {
        ResumePreview(network: Network())
    }
}
