//
//  Network.swift
//  VerifiedResume
//
//  Created by Valentin on 19/05/2023.
//

import Foundation

import SwiftUI

class Network: ObservableObject {
    @Published var authToken: String = ""
    
    @Published var userInfo: User = User(uid: "", email: "", password: "", avatar: "", cv: CV(id: "", firstName: "", lastName: "", about: "", userId: ""), savedCVs: [], savedCompanies: [], educations: [], experiences: [], skills: [], company: [], employee: [])
    
    @Published var savedCVs: [CV] = []
    @Published var savedCompanies: [Company] = []
    
    private let url_root = "http://10.147.17.218:5555"
    
    func loginUser() {
        guard let url = URL(string: "\(self.url_root)/user/login") else { fatalError("Missing URL") }
        
        var urlRequest = URLRequest(url: url)
        
        let headers = [
            "Accept": "*/*",
            "Content-Type": "application/json"
        ]
        
        let parameters = [
            "email": "user@example.com",
            "password": "123123"
        ] as [String: Any]
        
        // Encode the parameters as JSON data
        let jsonData = try? JSONSerialization.data(withJSONObject: parameters)
        
        urlRequest.httpMethod = "POST"
        urlRequest.allHTTPHeaderFields = headers
        urlRequest.httpBody = jsonData
        
        let dataTask = URLSession.shared.dataTask(with: urlRequest) { (data, response, error) in
            if let error = error {
                print("Request error: ", error)
                return
            }
            
            guard let response = response as? HTTPURLResponse else { return }
            
            if response.statusCode == 200 {
                guard let data = data else { return }
                DispatchQueue.main.async {
                    do {
                        let decodedAuthenticationToken = try JSONDecoder().decode(APIResponse<AuthenticationToken>.self, from: data)
                        self.authToken = decodedAuthenticationToken.data.accessToken
                    } catch let error {
                        print("Error decoding: ", error)
                    }
                }
            }
        }
        
        dataTask.resume()
    }
    
    func getUserInfo(accessToken: String){
        guard let url = URL(string: "\(self.url_root)/user/profile") else { fatalError("Missing URL") }
        
        var urlRequest = URLRequest(url: url)
        
        let headers = [
            "Accept": "/",
            "Authorization": "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1MzM1NmU0OGEwNWQyZTNmOGEiLCJpYXQiOjE2ODQ1MzUxMTl9.OVY7n3AIA0qP6gEvVcmo6Ei1gxDkylryypqb5vhFLBJrr_Esy1AR18JGDoeFWh3hkqwyjHv6pgMRv3dj2U6TKQ"
        ]
        
        urlRequest.httpMethod = "GET"
        urlRequest.allHTTPHeaderFields = headers
        
        let dataTask = URLSession.shared.dataTask(with: urlRequest) { (data, response, error) in
            if let error = error {
                print("Request error: ", error)
                return
            }
            
            guard let response = response as? HTTPURLResponse else { return }
            if response.statusCode == 200 {
                guard let data = data else { return }
                DispatchQueue.main.async {
                    do {
                        let decodedUserInfoResponse = try JSONDecoder().decode(APIResponse<User>.self, from: data)
                        self.userInfo = decodedUserInfoResponse.data
                    } catch let error {
                        print("Error decoding: ", error)
                    }
                }
            }
        }
        
        dataTask.resume()
    }
    
    
    func getSavedProfiles(){
        guard let url = URL(string: "\(self.url_root)/user/saved") else { fatalError("Missing URL") }
        
        var urlRequest = URLRequest(url: url)
        
        let headers = [
            "Accept": "/",
            "Authorization": "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1MzM1NmU0OGEwNWQyZTNmOGEiLCJpYXQiOjE2ODQ1MzUxMTl9.OVY7n3AIA0qP6gEvVcmo6Ei1gxDkylryypqb5vhFLBJrr_Esy1AR18JGDoeFWh3hkqwyjHv6pgMRv3dj2U6TKQ"
        ]
        
        urlRequest.httpMethod = "GET"
        urlRequest.allHTTPHeaderFields = headers
        
        let dataTask = URLSession.shared.dataTask(with: urlRequest) { (data, response, error) in
            if let error = error {
                print("Request error: ", error)
                return
            }
            
            guard let response = response as? HTTPURLResponse else { return }
            print(response)
            if response.statusCode == 200 {
                guard let data = data else { return }
                DispatchQueue.main.async {
                    do {
                        let decodedProfilesResponse = try JSONDecoder().decode(APIResponse<SavedProfile>.self, from: data)
                        print(decodedProfilesResponse)
                        self.savedCVs = decodedProfilesResponse.data.savedCV
                        self.savedCompanies = decodedProfilesResponse.data.savedCompany
                    } catch let error {
                        print("Error decoding: ", error)
                    }
                }
            }
        }
        
        dataTask.resume()
    }


func getSavedCompanies(){
    guard let url = URL(string: "\(self.url_root)/user/profile") else { fatalError("Missing URL") }
    
    var urlRequest = URLRequest(url: url)
    
    let headers = [
        "Accept": "/",
        "Authorization": "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1MzM1NmU0OGEwNWQyZTNmOGEiLCJpYXQiOjE2ODQ1MzUxMTl9.OVY7n3AIA0qP6gEvVcmo6Ei1gxDkylryypqb5vhFLBJrr_Esy1AR18JGDoeFWh3hkqwyjHv6pgMRv3dj2U6TKQ"
    ]
    
    urlRequest.httpMethod = "GET"
    urlRequest.allHTTPHeaderFields = headers
    
    let dataTask = URLSession.shared.dataTask(with: urlRequest) { (data, response, error) in
        if let error = error {
            print("Request error: ", error)
            return
        }
        
        guard let response = response as? HTTPURLResponse else { return }
        if response.statusCode == 200 {
            guard let data = data else { return }
            DispatchQueue.main.async {
                do {
                    let decodedUserInfoResponse = try JSONDecoder().decode(APIResponse<User>.self, from: data)
                    self.userInfo = decodedUserInfoResponse.data
                } catch let error {
                    print("Error decoding: ", error)
                }
            }
        }
    }
    
    dataTask.resume()
}

}
