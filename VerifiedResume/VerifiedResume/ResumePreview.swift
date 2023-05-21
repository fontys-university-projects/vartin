//
//  ResumePreview.swift
//  VerifiedResume
//
//  Created by Valentin on 10/05/2023.
//

import SwiftUI

struct ResumePreview: View {
    var body: some View {
        VStack(){
            ScrollView(){
                Image("default-cover")
                    .resizable()
                    .clipShape(Rectangle())
                    .frame(height: 250.0, alignment: .top)
                    

                CircleImage(width: 200.0, height: 200.0)
                    .offset(y: -150)
                    .padding(.bottom, -150)
                
                Text("Jonh Doe")
                    .font(.title)
                Text("Developer")
                    .foregroundColor(Color.gray)
                    
                
                VStack(){
                    Section(text: "About me"){
                        Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
                            .font(/*@START_MENU_TOKEN@*/.body/*@END_MENU_TOKEN@*/)
                            .fontWeight(.light)
                            .foregroundColor(Color.gray)
                            .multilineTextAlignment(.leading)
                            
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Skills"){
                        
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Experience"){
                        
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Education & Training"){
                        
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Languages"){
                        
                    }
                    .padding(.bottom)

                        
                }.padding()
                
                Spacer()
            }
        }.ignoresSafeArea()
    }
}

struct ResumePreview_Previews: PreviewProvider {
    static var previews: some View {
        ResumePreview()
    }
}
