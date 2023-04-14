package com.example.myseries.data.models

private const val DEFAULT_THUMBNAIL_URL: String = "https://marketplace.canva.com/EAE-HtAkK7o/1/0/1131w/canva-dark-grey-simple-samurai-warrior-action-movies-promotion-poster-0SiR6y7aypo.jpg"
private const val DEFAULT_COVER_URL: String = "https://marketplace.canva.com/EAE--gBJsSg/1/0/1600w/canva-black-and-red-minimalist-movie-poster-landscape-WQ3u935ol68.jpg"


data class Show(
    val title: String,
    val genres: List<String>,
    val description: String,
    val thumbnailUrl: String = DEFAULT_THUMBNAIL_URL,
    val coverUrl: String = DEFAULT_COVER_URL,
    val episodes: Map<Int, List<Episode>>? = null,
    )

data class Episode(
    val episode: Int,
    val thumbnailUrl: String,
)


//enum class Genre{
//    Action,
//    Adventure,
//    Comedy,
//    Crime,
//    Mystery,
//    Fantasy,
//    Historical,
//    Horror,
//    Romance,
//    Satire,
//    Thriller,
//}