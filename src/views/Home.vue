<template>
  <v-app style="background-color: black; height: max-content; display: grid; place-items: center;">
    <v-container>
      <v-col style="background-color: black; text-align: center;">
        <v-col cols="12">
          <h1 style="color: white; text-align: center;">Naron Family Dinner</h1>
          <h4 style="color: white; text-align: center;" class="mb-10">For when none of you can compromise</h4>
        </v-col>
          <v-row>
            <v-col cols="12" lg="4" style="background-color: black;">
              <div>
                <!-- <canvas class="confetti-canvas" id="confetti-canvas"></canvas> -->
                  <h1 style="color: white; text-align: center;">Raleigh</h1>
                  <FortuneWheel
                  style="width: max-width; align-items: center; justify-content: center; display: flex;"
                  class="mt-5 mr-5"
                  :canvas="canvasOptions"
                  :prizes="prizesRaleigh"
                  :verify="cavansVerify"
                  @rotateStart="onCanvasRotateStart"
                  @rotateEnd="onRotateEnd"
                  ></FortuneWheel>
              </div>
            </v-col>
            <v-col cols="12" lg="4" style="background-color: black; margin-bottom: 20px;">
              <div>
                <h1 style="color: white; text-align: center;">Cary</h1>
                <FortuneWheel
                  style="width: max-width; align-items: center; justify-content: center; display: flex;"
                  class="mt-5 mr-5"
                  :canvas="canvasOptions"
                  :prizes="prizesCary"
                  :useWeight="true"
                  :verify="cavansVerify"
                  @rotateStart="onCanvasRotateStart"
                  @rotateEnd="onRotateEnd"
                  ></FortuneWheel>
              </div>
            </v-col>
            <v-col cols="12" lg="4" style="background-color: black; margin-bottom: 20px;">
              <div>
              <h1 style="color: white; text-align: center;">Durham</h1>
                <FortuneWheel
                  style="width: max-width; align-items: center; justify-content: center; display: flex;"
                  class="mt-5 mr-5"
                  :canvas="canvasOptions"
                  :prizes="prizesDurham"
                  :useWeight="true"
                  :verify="cavansVerify"
                  @rotateStart="onCanvasRotateStart"
                  @rotateEnd="onRotateEnd"
                ></FortuneWheel>
              </div>
            </v-col>
          </v-row>
      </v-col>
  </v-container>
</v-app>
</template>

<script>
import confetti from 'canvas-confetti';
import FortuneWheel from 'vue-fortune-wheel'
import 'vue-fortune-wheel/lib/vue-fortune-wheel.css'

export default {

name: 'Home',

components: {
  FortuneWheel
},

data: () => ({
  //state
  cavansVerify: true, // Whether the turntable in canvas mode is enabled for verification
  canvasOptions: {
  borderWidth: 6,
  borderColor: '#584b43'
  },
  prizesRaleigh: [
    {
      id: 1, //* The unique id of each prize, an integer greater than 0
      name: 'Whiskey Kitchen', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
      value: 'Whiskey Kitchen', //* Prize value, return value after spinning
      bgColor: '#0C264C', // Background color (no need for this parameter when type is image)
      color: '#ffffff', // Font color (this parameter is not required when type is image)
      probability: 12.5, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
      weight: 1 // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
    },
    {
      id: 2,
      name: 'Trophy Pizza',
      value: 'Trophy Pizza',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 12.5,
      weight: 1
    },
    {
      id: 3,
      name: 'LongLeaf Swine',
      value: 'LongLeaf Swine',
      bgColor: '#0C264C',
      color: '#ffffff',
      probability: 12.5,
      weight: 1
    },
    {
      id: 4,
      name: 'Standard Beer + Food',
      value: 'Standard Beer + Food',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 12.5,
      weight: 1
    },
    {
      id: 5,
      name: 'Neuse River Brewing Compnay',
      value: 'Neuse River Brewing Company',
      bgColor: '#0C264C',
      color: '#ffffff',
      probability: 12.5,
      weight: 1
    },
    {
      id: 6,
      name: 'Parkside Restaurant',
      value: 'Parkside Restaurant',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 12.5,
      weight: 1
    },
    {
      id: 7,
      name: 'Cafe Tiramisu',
      value: 'Cafe Tiramisu',
      bgColor: '#0C264C',
      color: '#ffffff',
      probability: 12.5,
      weight: 1
    },
    {
      id: 8,
      name: 'Gonza Tacos and Tequila',
      value: 'Gonza Tacos and Tequila',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 12.5,
      weight: 1
    },
  ],
  prizesCary: [
    {
      id: 1, //* The unique id of each prize, an integer greater than 0
      name: 'Lucky 32', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
      value: 'Lucky 32', //* Prize value, return value after spinning
      bgColor: '#0C264C', // Background color (no need for this parameter when type is image)
      color: '#ffffff', // Font color (this parameter is not required when type is image)
      probability: 16.70, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
      weight: 1 // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
    },
    {
      id: 2,
      name: 'Crosstown',
      value: 'Crosstown',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    },
    {
      id: 3,
      name: 'Doherty\'s Irish Pub',
      value: 'Doherty\'s Irish Pub',
      bgColor: '#0C264C',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    },
    {
      id: 4,
      name: 'A\'Verde',
      value: 'A\'Verde',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    },
    {
      id: 5,
      name: 'Gonza Tacos and Tequila',
      value: 'Gonza Tacos and Tequila',
      bgColor: '#0C264C',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    },
    {
      id: 6,
      name: 'Scratch Kitchen',
      value: 'Scratch Kitchen',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    },
  ],
  prizesDurham: [
    {
      id: 1, //* The unique id of each prize, an integer greater than 0
      name: 'Alley 26', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
      value: 'Alley 26', //* Prize value, return value after spinning
      bgColor: '#0C264C', // Background color (no need for this parameter when type is image)
      color: '#ffffff', // Font color (this parameter is not required when type is image)
      probability: 16.70, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
      weight: 1 // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
    },
    {
      id: 2,
      name: 'Clouds Brewing',
      value: 'Clouds Brewing',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    },
    {
      id: 3,
      name: 'Gonza Tacos and Tequila',
      value: 'Gonza Tacos and Tequila',
      bgColor: '#0C264C',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    },
    {
      id: 3,
      name: 'Bar Virgile',
      value: 'Bar Virgile',
      bgColor: '#B0B7BC',
      color: '#ffffff',
      probability: 16.66,
      weight: 1
    }
  ]
}),

mounted() {
//this.triggerConfetti();
},

methods: {
triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  confetti.create(canvas, {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });
},
onImageRotateStart() {
      console.log('onRotateStart')
    },
    onCanvasRotateStart(rotate) {
      if (!this.canvasVerify) {
        const verified = true // true: the test passed the verification, false: the test failed the verification
        this.DoServiceVerify(verified, 100).then((verifiedRes) => {
          if (verifiedRes) {
            console.log('Verification passed, start to rotate')
            rotate() // Call the callback, start spinning
            this.canvasVerify = false // Turn off verification mode
          } else {
            alert('Failed verification')
          }
        })
        return
      }
      console.log('onCanvasRotateStart')
    },
    onRotateEnd(prize) {
      alert(prize.value)
    },
    // Simulate the request back-end interface, verified: whether to pass the verification, duration: delay time
    DoServiceVerify(verified, duration) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(verified)
        }, duration)
      })
    }
},
created() {
 //this.showTeamBoard()
 },
}
</script>

<style>
.runescape {
font-family: 'RuneScape UF';
color: #ffff00;
text-align: center;
}     

.rules {
text-align: left; 
line-height: 1.02; 
font-size: 2rem;
}

.top{
margin-top: 0px;
}

.jumbo {
font-size: 6rem;
line-height: 1.02;
font-weight: 500;
}

.teamname {
font-size: 2rem;
}

.confetti-canvas {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 9999;
pointer-events: none;
}

</style>