//
//  SavedCompany.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct SavedCompany: Identifiable, Hashable, Codable {
    var id: String
    var companyId: String
    var userId: String?
    var employeeId: String?
    var createdAt: String
}
