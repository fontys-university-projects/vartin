//
//  Employee.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct Employee: Identifiable, Codable {
    var id: String
    var firstName: String
    var lastName: String
    var email: String
    var phone: String?
    var position: String?
    var type: EmployeeType
    var admin: Bool
    var savedCVs: [SavedCV]
    var savedCompanies: [SavedCompany]
    var userId: String?
    var companyId: String
}
