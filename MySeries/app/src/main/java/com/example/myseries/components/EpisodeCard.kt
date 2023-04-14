package com.example.myseries.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import coil.compose.rememberImagePainter
import com.example.myseries.data.models.Episode


@Composable
fun EpisodeCard(
    episode: Episode) {
    Card (
        modifier = Modifier
            .size(150.dp, 250.dp)
            .padding(8.dp),
        elevation = 0.dp
    ) {
        Column() {
            Image(
                painter = rememberImagePainter(episode.thumbnailUrl),
                contentDescription = "",
                modifier = Modifier
//                    .fillMaxWidth()
                    .aspectRatio(0.68f)
//                    .clip(MaterialTheme.shapes.medium)
            )
            Text(
                text = "Episode ${episode.episode}",
                modifier = Modifier
                    .padding(start = 5.dp, top = 8.dp)
//                    .align(Alignment.CenterHorizontally)
                    .fillMaxWidth(),
                style = MaterialTheme.typography.caption
            )
        }
    }
}