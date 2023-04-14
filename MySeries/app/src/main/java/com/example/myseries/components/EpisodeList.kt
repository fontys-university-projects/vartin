package com.example.myseries.components

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.example.myseries.data.models.Episode

@Composable
fun EpisodeList(episodes: List<Episode>) {
    LazyRow(
        modifier = Modifier.fillMaxWidth(),
    ) {
        items(episodes)  { episode ->
            EpisodeCard(episode = episode)
        }
    }
}