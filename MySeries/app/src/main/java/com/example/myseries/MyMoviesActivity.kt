package com.example.myseries

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import coil.compose.rememberImagePainter
import com.example.myseries.ui.theme.MySeriesTheme

class MyMoviesActivity : ComponentActivity() {

    data class Movie(
        val title: String,
        val thumbnailUrl: String
    )

    val movies = listOf(
        Movie("John Wick", "https://image.tmdb.org/t/p/original/bXU5CRTzyEpuqPPxHwUzcxfEwi0.jpg"),
        Movie("John Wick: Chapter Two", "https://media-cache.cinematerial.com/p/500x/7aamvt9l/john-wick-chapter-two-theatrical-movie-poster.jpg?v=1482175534"),
        Movie("John Wick: Chapter 3 - Parabellum", "https://media-cache.cinematerial.com/p/500x/whzynhnm/john-wick-chapter-3-parabellum-theatrical-movie-poster.jpg?v=1553186883"),
        Movie("John Wick: Chapter 4", "https://media-cache.cinematerial.com/p/500x/npyfi8vj/john-wick-chapter-4-swiss-movie-poster.jpg?v=1678582234"),
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MySeriesTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    MovieGrid(movies = movies)
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview2() {
    val movies = listOf(
        MyMoviesActivity.Movie("John Wick", "https://image.tmdb.org/t/p/original/bXU5CRTzyEpuqPPxHwUzcxfEwi0.jpg"),
        MyMoviesActivity.Movie("John Wick: Chapter Two", "https://media-cache.cinematerial.com/p/500x/7aamvt9l/john-wick-chapter-two-theatrical-movie-poster.jpg?v=1482175534"),
        MyMoviesActivity.Movie("John Wick: Chapter 3 - Parabellum", "https://media-cache.cinematerial.com/p/500x/whzynhnm/john-wick-chapter-3-parabellum-theatrical-movie-poster.jpg?v=1553186883"),
        MyMoviesActivity.Movie("John Wick: Chapter 4", "https://media-cache.cinematerial.com/p/500x/npyfi8vj/john-wick-chapter-4-swiss-movie-poster.jpg?v=1678582234"),

        MyMoviesActivity.Movie("John Wick", "https://image.tmdb.org/t/p/original/bXU5CRTzyEpuqPPxHwUzcxfEwi0.jpg"),
        MyMoviesActivity.Movie("John Wick: Chapter Two", "https://media-cache.cinematerial.com/p/500x/7aamvt9l/john-wick-chapter-two-theatrical-movie-poster.jpg?v=1482175534"),
        MyMoviesActivity.Movie("John Wick: Chapter 3 - Parabellum", "https://media-cache.cinematerial.com/p/500x/whzynhnm/john-wick-chapter-3-parabellum-theatrical-movie-poster.jpg?v=1553186883"),
        MyMoviesActivity.Movie("John Wick: Chapter 4", "https://media-cache.cinematerial.com/p/500x/npyfi8vj/john-wick-chapter-4-swiss-movie-poster.jpg?v=1678582234"),

        MyMoviesActivity.Movie("John Wick", "https://image.tmdb.org/t/p/original/bXU5CRTzyEpuqPPxHwUzcxfEwi0.jpg"),
        MyMoviesActivity.Movie("John Wick: Chapter Two", "https://media-cache.cinematerial.com/p/500x/7aamvt9l/john-wick-chapter-two-theatrical-movie-poster.jpg?v=1482175534"),
        MyMoviesActivity.Movie("John Wick: Chapter 3 - Parabellum", "https://media-cache.cinematerial.com/p/500x/whzynhnm/john-wick-chapter-3-parabellum-theatrical-movie-poster.jpg?v=1553186883"),
        MyMoviesActivity.Movie("John Wick: Chapter 4", "https://media-cache.cinematerial.com/p/500x/npyfi8vj/john-wick-chapter-4-swiss-movie-poster.jpg?v=1678582234"),

        MyMoviesActivity.Movie("John Wick", "https://image.tmdb.org/t/p/original/bXU5CRTzyEpuqPPxHwUzcxfEwi0.jpg"),
        MyMoviesActivity.Movie("John Wick: Chapter Two", "https://media-cache.cinematerial.com/p/500x/7aamvt9l/john-wick-chapter-two-theatrical-movie-poster.jpg?v=1482175534"),
        MyMoviesActivity.Movie("John Wick: Chapter 3 - Parabellum", "https://media-cache.cinematerial.com/p/500x/whzynhnm/john-wick-chapter-3-parabellum-theatrical-movie-poster.jpg?v=1553186883"),
        MyMoviesActivity.Movie("John Wick: Chapter 4", "https://media-cache.cinematerial.com/p/500x/npyfi8vj/john-wick-chapter-4-swiss-movie-poster.jpg?v=1678582234"),
        // ...
    )

    MySeriesTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colors.background
        ) {
            MovieGrid(movies = movies)
        }
    }
}

@Composable
fun MovieGrid(movies: List<MyMoviesActivity.Movie>) {
    LazyVerticalGrid(
        columns = GridCells.Adaptive(130.dp),
        contentPadding = PaddingValues(16.dp),
        modifier = Modifier.fillMaxWidth()
    ) {
        items(movies)  { movie ->
            MovieCard(movie = movie)
        }
    }
}

@Composable
fun MovieCard(movie: MyMoviesActivity.Movie){
    Card (
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
            .clickable(onClick = { /* Handle click */ })
    ) {
        Image(
            painter = rememberImagePainter(movie.thumbnailUrl),
            contentDescription = movie.title,
            modifier = Modifier
                .fillMaxWidth()
                .aspectRatio(0.7f)
                .clip(MaterialTheme.shapes.medium)
        )
//        Text(
//            text = movie.title,
//            modifier = Modifier
//                .padding(top = 8.dp),
////                .align(Alignment.BottomCenter),
//            style = MaterialTheme.typography.subtitle1
//        )
    }
}
