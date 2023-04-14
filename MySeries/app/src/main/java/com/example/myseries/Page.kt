package com.example.myseries

sealed class Page(val route: String) {
    object LandingPage: Page("landing_page")
    object ForYouPage: Page("for_you_page")
    object ProfilePage: Page("profile_page")
    object ShowPage: Page("show_page")
}