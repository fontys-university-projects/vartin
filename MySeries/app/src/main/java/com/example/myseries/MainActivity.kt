package com.example.myseries

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Divider
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountBox
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import coil.compose.rememberImagePainter
import com.example.myseries.components.AppLayout
import com.example.myseries.components.ButtonDesc
import com.example.myseries.components.EpisodeList
import com.example.myseries.components.ShowList
import com.example.myseries.data.dummy.top_shows
import com.example.myseries.data.models.Episode
import com.example.myseries.data.models.Show
import com.example.myseries.ui.theme.MySeriesTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()

            val items = listOf(
                ButtonDesc(
                    icon = Icons.Filled.Home,
                    text = "Home",
                    onClick = {
                        navController.currentDestination?.run{
                            if (this.route != Page.LandingPage.route)
                                navController.navigate(route = Page.LandingPage.route)
                        }
                    }
                ),
                ButtonDesc(
                    icon = Icons.Filled.Star,
                    text = "For You",
                    onClick = {
                        navController.currentDestination?.run{
                            if (this.route != Page.ForYouPage.route)
                                navController.navigate(route = Page.ForYouPage.route)
                        }
                    }
                ),
                ButtonDesc(
                    icon = Icons.Filled.AccountBox,
                    text = "Profile",
                    onClick = {
                        navController.currentDestination?.run{
                            if (this.route != Page.ProfilePage.route)
                                navController.navigate(route = Page.ProfilePage.route)
                        }
                    }
                )
            )

            MySeriesTheme {
                AppLayout(
                    modifier = Modifier.fillMaxSize(),
                    backgroundColor = MaterialTheme.colors.background,
                    navigationItems = items
                ) {
                    val padding = it
                    NavHost(navController = navController,
                            startDestination = Page.LandingPage.route
                    ){
                        composable(route = Page.LandingPage.route) {
                            LandingPage(navController = navController , paddingValues = padding)
                        }
                        composable(route = Page.ForYouPage.route){
                            MyShowPage(navController = navController, paddingValues = padding)
                        }
                        composable(route = Page.ProfilePage.route){ }
                        composable(
                            route = Page.ShowPage.route,
//                            arguments = listOf(
//                                navArgument("show") {
//                                    type = NavType.ParcelableType(Show::class.java)
//                                }
//                            )
                        ){
                            ShowPage(
                                paddingValues = padding,
                                show = Show(
                                    title = "John Wick: Chapter 1",
                                    genres = listOf("Action", "Crime" , "Thriller"),
                                    description = "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car",
                                    episodes = mapOf(
                                        Pair(first = 1, second = listOf(Episode(episode = 1, thumbnailUrl = "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UY2048_.jpg"))),
                                        Pair(first = 2, second = listOf(Episode(episode = 1, thumbnailUrl = "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UY2048_.jpg"))),
                                        Pair(first = 3, second = listOf(Episode(episode = 1, thumbnailUrl = "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UY2048_.jpg"))),
                                    )
                                )
                            )
                        }
                    }
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun LandingPagePreview() {
    MySeriesTheme {
        // A surface container using the 'background' color from the theme
        AppLayout(
            modifier = Modifier.fillMaxSize(),
            backgroundColor = MaterialTheme.colors.background,
            navigationItems = listOf()
        ) {
//            LandingPage(paddingValues = it)
        }
    }
}

@Composable
fun LandingPage(navController: NavHostController,
                paddingValues: PaddingValues) {
    val showLists = listOf(
        Pair(first = "Top 10 in the Netherlands", second = top_shows),
        Pair(first = "Popular Horror", second =  top_shows),
        Pair(first = "Oscar's Award 2023", second = top_shows),
        Pair(first = "Recommended by the community", second = top_shows),
    )

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(paddingValues)
    ) {
        items(showLists) {showList ->
            ShowList(name = showList.first, shows = showList.second, onClickCard = { navController.navigate(route = Page.ShowPage.route) })
        }
    }
}

@Composable
fun MyShowPage(navController: NavHostController,
               paddingValues: PaddingValues) {
    val showLists = listOf(
        Pair(first = "Since you liked John Wick", second = top_shows),
        Pair(first = "Horror shows", second = top_shows),
        Pair(first = "Explore these titles", second = top_shows),
        Pair(first = "Recommended Korean shows", second = top_shows),
    )

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(paddingValues)
    ) {
        items(showLists) {showList ->
            ShowList(name = showList.first, shows = showList.second, onClickCard = { navController.navigate(route = Page.ShowPage.route) })
        }
    }
}

@Composable
fun ShowPage(paddingValues: PaddingValues,
             show: Show) {
    Column(
        modifier = Modifier
            .padding(paddingValues)
            .verticalScroll(rememberScrollState())) {

        Box(modifier = Modifier.fillMaxWidth().height(200.dp)){
            Image(
                painter = rememberImagePainter(show.coverUrl),
                contentDescription = show.title,
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(MaterialTheme.shapes.medium)
            )
        }

        Text(
            text = show.title,
            modifier = Modifier
                .padding(start = 5.dp, top = 8.dp)
                .fillMaxWidth(),
            fontWeight = FontWeight.Bold,
            style = MaterialTheme.typography.h5
        )
        Text(
            text = show.genres.joinToString(separator = " | "),
            modifier = Modifier
                .padding(start = 8.dp, top = 2.dp)
                .fillMaxWidth(),
            style = MaterialTheme.typography.caption
        )
        Text(
            text = show.description,
            modifier = Modifier
                .padding(start = 8.dp, top = 5.dp, bottom = 5.dp)
                .fillMaxWidth(),
            fontWeight = FontWeight.Light,
            style = MaterialTheme.typography.caption
        )

        show.episodes?.let {
            val seasonEpisodeMapping = it
            val seasons = it.keys.toList()
            Column() {
                LazyRow(Modifier.padding(start = 5.dp)){
                    items(seasons){ season ->
                        Text(text = "Season $season ")
                    }
                }
                Divider(
//                  color = Color.White,
                    thickness = 1.dp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(1.dp)
//                        .align(Alignment.BottomStart)
                )
                seasonEpisodeMapping.get(1)?.let {
                        it1 -> EpisodeList(episodes = it1)
                }
            }
        }

        ShowList(name = "Other shows like this", shows = top_shows, onClickCard = {  })
    }
}
