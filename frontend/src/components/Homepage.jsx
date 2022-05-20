import React from "react";
import Navigation from "./Navigation";
import FilterBanner from "./FilterBanner";
import "../App.css";
import { Stack, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { shadows, borders } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import { dark } from "@mui/material/styles/createPalette";

const color = lightGreen['A400'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffebee',
      contrastText: 'A400'
    },
    secondary: lightGreen
  },
  typography: {
    fontFamily: 'Bungee',


    body1: {
      fontFamily: "Helvetica",
   }
  }
})




export default function Homepage() {



  return (
    <div>

        <Navigation />

      <FilterBanner />
      <ThemeProvider theme={theme}>
      <Typography
      variant="h3"
      color="#9e9e9e"
      align="center"
      sx={{
        // lineHeight: 1.5,
        p: 2
      }}
      >
      Featured Games:
      </Typography>


      <div class="game-container">
      <ImageList  sx={{ maxHeight: "100%" }} cols={2} gap={10}>
      <ImageListItem  sx={{
            width: 500,
            height: 500,
            boxShadow: 4,
            borderRadius: 8,
            p: 3,
            m: 2,
          }}
          >

        <article class="game-card card-1">

          <img
            class="game-image"
            src="https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            alt="game image"
          />
            <Typography
      variant="h3"
      color="#e0e0e0"
      align="center"
      sx={{
        fontFamily: "Rubik",
        fontWeight: 700,
        p: 3
      }}
      >
      Limbo
      </Typography>


          <Typography
      color="primary"
      align="center"
      >
         This popular 2D puzzle-platformer creates the atmosphere of isolation, where the player alone can guide the nameless protagonist to his destination. Hostile environments and one-hit deaths may seem difficult, but the game implements a fair amount of checkpoints. The monochrome color palette showcases cartoony proportions of every living thing while making lack of details threatening. Limbo shows you exactly what you encounter, but never how it looks. Limbo uses the atmosphere and sound design of the horror genre while avoiding tropes of the modern horror games. The overarching theme and unique style compensated for the rather short game with an abrupt ending, making Limbo one of the most impactful games for the genre. The simple controls and easy-to-pick-up mechanics help to make a clear distinction, which part of the stage players can interact with, and which part can lead to the quick death. Even though the game is in black and white, this separation is intuitive and natural, so the player would know exactly where to go or what to do.

      </Typography>


      <Typography
      variant="h3"
      color="#0c0f0eff"
      align="center"
      sx={{
        fontFamily: "Oswald",
        fontWeight: 700,
        fontSize: 24,
        p: 10
      }}
      >
            Metacritic Score:
            88
          </Typography>

        </article>
        </ImageListItem>
        <ImageListItem  sx={{
            width: 500,
            height: 500,
            boxShadow: 4,
            borderRadius: 8,
            p: 3,
            m: 2,
          }}
          >

        <article class="game-card card-2">


          <img
            class="game-image"
            src="https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg"
            alt="game image"
          />
          <Typography
      variant="h3"
      color="#e0e0e0"
      align="center"
      sx={{
        fontFamily: "Rubik",
        fontWeight: 700,
        p: 3
      }}
      >
      Darkest Dungeon
      </Typography>
          <Typography
      color="primary"
      align="center"
      >
          Darkest Dungeon is a roguelike RPG developed by Red Hook Studios. The works of Howard Lovecraft served as the main inspiration for the game which addresses the themes of fear and psychological trauma. The story begins when the player learns that they inherited a manor from a distant relative who died excavating the catacombs under the manor and accidentally released a number of monsters. The player controls a group of adventure seekers that explore the dungeons beneath an old manor. Before every expedition, the player has to choose several heroes from the suggested roster and lead them through procedurally generated dungeons collecting treasures and killing various monsters. The main objective is to save the lives and mental health of the heroes. Mental health declines every time when the player's comrades suffer damage, walk into traps or fall back from the battlefield. If the hero suffers a breakdown, they start to behave unexpectedly. During the expedition, the characters obtain their own traits - permanent behavior patterns, which can be both negative, such as alcoholism and kleptomania or positive like bravery.
          </Typography>
          <Typography
      variant="h3"
      color="#0c0f0eff"
      align="center"
      sx={{
        fontFamily: "Oswald",
        fontWeight: 700,
        fontSize: 24,
        p: 3
      }}
      >
            Metacritic Score:
            84
        </Typography>

        </article>
        </ImageListItem>

        <ImageListItem  sx={{
            width: 500,
            height: 500,
            boxShadow: 4,
            borderRadius: 8,
            p: 3,
            m: 2,
          }}
          >

        <article class="game-card card-3">


          <img
            class="game-image"
            src="https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg"
            alt="game image"
          />
          <Typography
      variant="h3"
      color="#e0e0e0"
      align="center"
      sx={{
        fontFamily: "Rubik",
        fontWeight: 700,
        p: 3
      }}
      >
      World of Goo
      </Typography>
          <Typography
      color="primary"
      align="center"
      >
          World of Goo is a physical construction puzzle.

          World of Goo is a physical construction puzzle. The gameplay consists of creating different shapes of goo balls. In total, the game has 47 levels. And, what is remarkable, each level has stylized visual and musical themes, what gives the game a unique atmosphere. There is another bonus level called World of Goo Corporation. Its essence is to build high towers with the help of extra balls goo, which the player managed to collect during the passage of the other levels. The primary goal of the game is to bring the required number of goo balls to the pipe which is the exit. To do this, the player must use the goo balls to build various structures such as towers and bridges, to overcome gravity in different places such as dungeons, hills, abysses or rocks. There are several types of goo balls, each of which has unique properties. The player must combine them to complete each level.
          </Typography>
          <Typography
      variant="h3"
      color="#0c0f0eff"
      align="center"
      sx={{
        fontFamily: "Oswald",
        fontWeight: 700,
        fontSize: 24,
        p: 7
      }}
      >
            Metacritic Score:
            90
          </Typography>

        </article>
          </ImageListItem>

          <ImageListItem  sx={{
            width: 500,
            height: 500,
            boxShadow: 4,
            borderRadius: 8,
            p: 3,
            m: 2,
          }}
          >

        <article class="game-card card-4">


          <img
            class="game-image"
            src="https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg"
          />
           <Typography
      variant="h3"
      color="#e0e0e0"
      align="center"
      sx={{
        fontFamily: "Rubik",
        fontWeight: 700,
        p: 3
      }}
      >
      Braid
      </Typography>
          <Typography
      color="primary"
      align="center"
      >
          Braid is a traditional platform game with puzzle solving. The story follows the main character Tim on his way through twisted 2D levels. According to the storyline, Tim’s aim is to rescue the princess from a monster. In the course of the completion, players will be able to get some additional information about the protagonist’s relationship with the princess. Players control the protagonist as he climbs platforms, jumps on the enemies to defeat them and to collect keys to hidden quests and mosaic parts. Players have to lead Tim through 6 worlds, each based on an intriguing time mechanic, as Tim features the ability to rewind the original pace of time. For example, Time and Forgiveness world allows respawning Tim after his death by switching time back. To attend the last level, Tim must assemble the mosaic. The story ends in the world simply called “1”, where time flows in reverse and returns to the normal pace by rewinding. The last room of the final world contains Tim’s meeting with the princess, but, due to the time pace turned back, players face some unpredictable twists of the plot.
          </Typography>
          <Typography
      variant="h3"
      color="#0c0f0eff"
      align="center"
      sx={{
        fontFamily: "Oswald",
        fontWeight: 700,
        fontSize: 24,
        p: 3
      }}
      >
            Metacritic Score:
            92
          </Typography>


        </article>
          </ImageListItem>
        </ImageList>
      </div>
      </ThemeProvider>
    </div>
  );
}
