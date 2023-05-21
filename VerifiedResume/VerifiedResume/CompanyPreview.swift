//
//  CompanyPreview.swift
//  VerifiedResume
//
//  Created by Valentin on 15/05/2023.
//

import SwiftUI

struct CompanyData: Identifiable{
    let website: String
    let industry: String
    let companySize: String
    let headquaters: String
    
    let id = UUID()
}


struct CompanyPreview: View {
    @ObservableObject var network: Network
    
    @State private var companyData = [CompanyData(website: "Link Here!", industry: "Software Development", companySize: "500+ employees", headquaters: "Eindhoven, Netherlands")]
    
    private let availableJobsAdaptveColumns = [
        GridItem(.adaptive(minimum: 250))
    ]
    
    var body: some View {
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
                        let link = URL(string: "https://unsplash.com/photos/nfqZ9Z50zvc")!
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
                
                //TODO: Add icon for verified companies
                Text("Company BV")
                    .font(.title)
                
                VStack(){
                    Section(text: "Overview"){
                        VStack() {
                            Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
                                .font(/*@START_MENU_TOKEN@*/.body/*@END_MENU_TOKEN@*/)
                                .fontWeight(.light)
                                .foregroundColor(Color.gray)
                                .multilineTextAlignment(.leading)
                            
                            
                            HStack(alignment: .top){
                                
                                VStack(alignment: .leading) {
                                    
                                    VStack(alignment: .leading){
                                        Text("Website")
                                            .multilineTextAlignment(.leading)
                                        Text("Link Here!")
                                            .font(.body)
                                            .fontWeight(.light)
                                            .foregroundColor(Color.gray)
                                            .multilineTextAlignment(.leading)
                                    }
                                    
                                    Spacer()
                                    
                                    VStack(alignment: .leading){
                                        Text("Industry")
                                            .multilineTextAlignment(.leading)
                                        Text("Software Development")
                                            .font(.body)
                                            .fontWeight(.light)
                                            .foregroundColor(Color.gray)
                                            .multilineTextAlignment(.leading)
                                        
                                    }
                                }
                                
                                Spacer()
                                
                                VStack(alignment: .leading) {
                                    
                                    VStack(alignment: .leading){
                                        Text("Size")
                                            .multilineTextAlignment(.leading)
                                        
                                        Text("500+ employees")
                                            .font(.body)
                                            .fontWeight(.light)
                                            .foregroundColor(Color.gray)
                                            .multilineTextAlignment(.leading)
                                    }
                                    
                                    Spacer()
                                    
                                    VStack(alignment: .leading){
                                        Text("Headquaters")
                                        Text("Eindhoven, Netherlands")
                                            .font(.body)
                                            .fontWeight(.light)
                                            .foregroundColor(Color.gray)
                                            .multilineTextAlignment(.leading)
                                    }
                                }
                            }
                            .padding(/*@START_MENU_TOKEN@*/.top/*@END_MENU_TOKEN@*/)
                            
                            
                        }
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Hybrid Workspace"){
                        Text("We value and support flexibility as part of our hybrid workplace where every employee can do their best work by working the way they work best.")
                            .font(.body)
                            .foregroundColor(Color.gray)
                        
                        HStack(alignment: .top){
                            VStack(alignment: .leading){
                                Text("Typical time on-site")
                                Text("Flexible")
                                    .font(.body)
                                    .fontWeight(.light)
                                    .foregroundColor(Color.gray)
                                    .multilineTextAlignment(.leading)
                            }
                            Spacer()
                            VStack(alignment: .leading){
                                Text("Featured benefits")
                                
                                Text("Flexible Working Hours")
                                    .font(.body)
                                    .fontWeight(.light)
                                    .foregroundColor(Color.gray)
                                    .multilineTextAlignment(.leading)
                                Text("Flexible Working Location")
                                    .font(.body)
                                    .fontWeight(.light)
                                    .foregroundColor(Color.gray)
                                    .multilineTextAlignment(.leading)
                                Text("Remote Working Options")
                                    .font(.body)
                                    .fontWeight(.light)
                                    .foregroundColor(Color.gray)
                                    .multilineTextAlignment(.leading)
                            }
                        }
                        .padding(.top)
                        
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Locations"){
                        
                        MapView().frame(height: 200)
                    }
                    .padding(.bottom)
                    
                    
                    Section(text: "Available Jobs"){
                        
                        let items = (1...4)
                        LazyVGrid(columns: availableJobsAdaptveColumns, alignment: .center, spacing: 10) {
                            ForEach(items, id: \.self) { item in
                                
                                InfoCard(first: " ", second: " ", third: "" , forth: "")
                            }
                        }
                        
                    }
                    .padding(.bottom)
                    
                }.padding()
                
                Spacer()
            }
        }.ignoresSafeArea()
    }
}


struct CompanyPreview_Previews: PreviewProvider {
    static var previews: some View {
        CompanyPreview(network: Network())
    }
}
