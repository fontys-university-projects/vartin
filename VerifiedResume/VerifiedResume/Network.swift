//
//  Network.swift
//  VerifiedResume
//
//  Created by Valentin on 19/05/2023.
//

import Foundation

import SwiftUI

class Network: ObservableObject {
    @Published var users: [User] = []

    private let url_root = "http://10.147.17.218"
    
    func loginUser() {
        guard let url = URL(string: "\(url_root)/user/login") else { fatalError("Missing URL") }

        let urlRequest = URLRequest(url: url)

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
                        let decodedUsers = try JSONDecoder().decode([User].self, from: data)
                        self.users = decodedUsers
                    } catch let error {
                        print("Error decoding: ", error)
                    }
                }
            }
        }

        dataTask.resume()
    }
}
