//
//  User.swift
//  VerifiedResume
//
//  Created by Valentin on 19/05/2023.
//

import Foundation

struct User: Identifiable, Decodable {
    var id: String
    var email: String
    var name: String
    var password: String
    var cv: CV?
    var savedCVs: [SavedCV]
    var savedCompanies: [SavedCompanies]
    var educations: [Education]
    var experiences: [Experience]
    var skils: [Skills]
    var company: [Company]
    var employee: [Employees]

    struct Address: Decodable {
        var street: String
        var suite: String
        var city: String
        var zipcode: String
        var geo: Geo

        struct Geo: Decodable {
            var lat: String
            var lng: String
        }
    }

    struct Company: Decodable {
        var name: String
        var catchPhrase: String
        var bs: String
    }
}
