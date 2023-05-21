//
//  SavedCV.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct SavedCV: Identifiable, Hashable, Codable {
    var id: String
    var cvId: String
    var userId: String?
    var employeeId: String?
    var createdAt: String
}
