//
//  GenericResponce.swift
//  VerifiedResume
//
//  Created by Valentin on 20/05/2023.
//

import Foundation

struct GenericResponce: Codable {
    let status: Bool
    let message: String
    let data: [String: Any]
}
