import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/entry-6a9d4ebf.mjs": {
    "type": "application/javascript",
    "etag": "\"19f7d-a03GGnpTvCSe3cg/49GV6j5eCEw\"",
    "mtime": "2021-12-21T19:47:27.602Z",
    "path": "../public/_nuxt/entry-6a9d4ebf.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"200-3pWoNUrvStGYxNdg7AXIrBaBW44\"",
    "mtime": "2021-12-21T19:47:27.591Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/resume-new-357c366d.mjs": {
    "type": "application/javascript",
    "etag": "\"d3-3op+74nQAB/7nrF4YH9xutQOQeM\"",
    "mtime": "2021-12-21T19:47:27.591Z",
    "path": "../public/_nuxt/resume-new-357c366d.mjs"
  },
  "/_nuxt/assets/entry.09ea69d1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b61-B5K5kHZg5g4ynSbseQkFJm04GDw\"",
    "mtime": "2021-12-21T19:47:27.603Z",
    "path": "../public/_nuxt/assets/entry.09ea69d1.css"
  },
  "/images/Color_mockups/blue.png": {
    "type": "image/png",
    "etag": "\"4d408-+38ZrCDv8m/WVvupRzbsrLE+15s\"",
    "mtime": "2021-12-21T19:47:27.588Z",
    "path": "../public/images/Color_mockups/blue.png"
  },
  "/images/Color_mockups/blue_reco.png": {
    "type": "image/png",
    "etag": "\"edadb-U/i/OFbOeNBCfm7aaR425klQgaE\"",
    "mtime": "2021-12-21T19:47:27.587Z",
    "path": "../public/images/Color_mockups/blue_reco.png"
  },
  "/images/Color_mockups/check_out.png": {
    "type": "image/png",
    "etag": "\"106664-PIM8rwn2QErq9elldoydFxOHlIE\"",
    "mtime": "2021-12-21T19:47:27.586Z",
    "path": "../public/images/Color_mockups/check_out.png"
  },
  "/images/Color_mockups/choose_your_favorite.png": {
    "type": "image/png",
    "etag": "\"bcbb3-Ryyu0+bQ7OJcKfVsWd+FKI3VR78\"",
    "mtime": "2021-12-21T19:47:27.584Z",
    "path": "../public/images/Color_mockups/choose_your_favorite.png"
  },
  "/images/Color_mockups/green.png": {
    "type": "image/png",
    "etag": "\"503e3-SbIbv5WtoQcaVei1DCC8IzlIdeM\"",
    "mtime": "2021-12-21T19:47:27.582Z",
    "path": "../public/images/Color_mockups/green.png"
  },
  "/images/Color_mockups/green_reco.png": {
    "type": "image/png",
    "etag": "\"e2504-16hGMd5hBA6NQob/LhhKUO6ZuVA\"",
    "mtime": "2021-12-21T19:47:27.581Z",
    "path": "../public/images/Color_mockups/green_reco.png"
  },
  "/images/Color_mockups/live_chat.png": {
    "type": "image/png",
    "etag": "\"15c89a-AIjNwx/Ls4I74lqh9zLNIBO4zyA\"",
    "mtime": "2021-12-21T19:47:27.580Z",
    "path": "../public/images/Color_mockups/live_chat.png"
  },
  "/images/Color_mockups/my_cart.png": {
    "type": "image/png",
    "etag": "\"c9bdb-JyGa6xYnkEYHtUVo6TifIfzi9OA\"",
    "mtime": "2021-12-21T19:47:27.577Z",
    "path": "../public/images/Color_mockups/my_cart.png"
  },
  "/images/Color_mockups/orange.png": {
    "type": "image/png",
    "etag": "\"4659f-SAQSQ22at+lakGPKvqc7QHw+g2o\"",
    "mtime": "2021-12-21T19:47:27.576Z",
    "path": "../public/images/Color_mockups/orange.png"
  },
  "/images/Color_mockups/orange_reco.png": {
    "type": "image/png",
    "etag": "\"ebc13-62U5BpPoB4SNhmXJqeeIZZhcb7o\"",
    "mtime": "2021-12-21T19:47:27.575Z",
    "path": "../public/images/Color_mockups/orange_reco.png"
  },
  "/images/Color_mockups/red.png": {
    "type": "image/png",
    "etag": "\"46c7f-Db755jeeh+N1HnLrE7hFVsuqil8\"",
    "mtime": "2021-12-21T19:47:27.573Z",
    "path": "../public/images/Color_mockups/red.png"
  },
  "/images/Color_mockups/red_reco.png": {
    "type": "image/png",
    "etag": "\"f4a03-1lGQkhayz1TScR8Z8AWKHStPqks\"",
    "mtime": "2021-12-21T19:47:27.572Z",
    "path": "../public/images/Color_mockups/red_reco.png"
  },
  "/images/Color_mockups/sign_in.png": {
    "type": "image/png",
    "etag": "\"122a17-wFVEKNyYg1dcKp7mDBZvfdwsWbM\"",
    "mtime": "2021-12-21T19:47:27.570Z",
    "path": "../public/images/Color_mockups/sign_in.png"
  },
  "/images/Color_mockups/sign_up.png": {
    "type": "image/png",
    "etag": "\"fb954-JHAYDk3ido+ZlwVONF5FxNSi5Js\"",
    "mtime": "2021-12-21T19:47:27.569Z",
    "path": "../public/images/Color_mockups/sign_up.png"
  },
  "/images/Crazy_8/1.png": {
    "type": "image/png",
    "etag": "\"24a4e-ILET4dKs1w+evyXpiXmRCJGgMFM\"",
    "mtime": "2021-12-21T19:47:27.566Z",
    "path": "../public/images/Crazy_8/1.png"
  },
  "/images/Crazy_8/2.png": {
    "type": "image/png",
    "etag": "\"20d0e-uU3gf+MIaAZrDsaHzRatoaG8vwo\"",
    "mtime": "2021-12-21T19:47:27.566Z",
    "path": "../public/images/Crazy_8/2.png"
  },
  "/images/Crazy_8/3.png": {
    "type": "image/png",
    "etag": "\"1343e-f2mD5HQAymnynUfJS8tv0FYT5Sk\"",
    "mtime": "2021-12-21T19:47:27.565Z",
    "path": "../public/images/Crazy_8/3.png"
  },
  "/images/Crazy_8/Crazy8_favorite_shake.png": {
    "type": "image/png",
    "etag": "\"125e6-bWCghxMQMtD1/+MlUCWho8JEKaA\"",
    "mtime": "2021-12-21T19:47:27.565Z",
    "path": "../public/images/Crazy_8/Crazy8_favorite_shake.png"
  },
  "/images/Crazy_8/Crazy8_live_chat.png": {
    "type": "image/png",
    "etag": "\"1411c-AkVQv8nC7cilGF/riZTGcXSKvIs\"",
    "mtime": "2021-12-21T19:47:27.565Z",
    "path": "../public/images/Crazy_8/Crazy8_live_chat.png"
  },
  "/images/Crazy_8/Crazy8_reco.png": {
    "type": "image/png",
    "etag": "\"3e284-k7nt7VbxLp+G1Ak4Nrh7KiXv6tM\"",
    "mtime": "2021-12-21T19:47:27.564Z",
    "path": "../public/images/Crazy_8/Crazy8_reco.png"
  },
  "/images/Desk_research/Basic_user_flow.png": {
    "type": "image/png",
    "etag": "\"e7c8-2+1GMY5QBzyWyvh7fy1hW/jVAEU\"",
    "mtime": "2021-12-21T19:47:27.563Z",
    "path": "../public/images/Desk_research/Basic_user_flow.png"
  },
  "/images/Desk_research/Graph_1.png": {
    "type": "image/png",
    "etag": "\"11b60-AHy2PiwpcurTgWeJ3upujZz8Ie0\"",
    "mtime": "2021-12-21T19:47:27.563Z",
    "path": "../public/images/Desk_research/Graph_1.png"
  },
  "/images/Desk_research/Graph_2.png": {
    "type": "image/png",
    "etag": "\"ba0d-i93etHp16NSh6V2Qpjzah45j334\"",
    "mtime": "2021-12-21T19:47:27.562Z",
    "path": "../public/images/Desk_research/Graph_2.png"
  },
  "/images/Desk_research/feature_prioritization.png": {
    "type": "image/png",
    "etag": "\"156a6-pL1Wl4OVL9ZiSt6yELRXUASwJY8\"",
    "mtime": "2021-12-21T19:47:27.562Z",
    "path": "../public/images/Desk_research/feature_prioritization.png"
  },
  "/images/Desk_research/lookback.png": {
    "type": "image/png",
    "etag": "\"157fd-zEGpsepTn9/gsxB7yoz7JD+mN14\"",
    "mtime": "2021-12-21T19:47:27.561Z",
    "path": "../public/images/Desk_research/lookback.png"
  },
  "/images/Desk_research/themes_and_opportunities.png": {
    "type": "image/png",
    "etag": "\"3c53d-rHIA1ntdLrrExSQdNXanZ1miu5s\"",
    "mtime": "2021-12-21T19:47:27.561Z",
    "path": "../public/images/Desk_research/themes_and_opportunities.png"
  },
  "/images/Low_fidelity_mockups/check_out.png": {
    "type": "image/png",
    "etag": "\"1bcaf-YYB6/mVZKMes+2QjEj9cOcjBgNE\"",
    "mtime": "2021-12-21T19:47:27.560Z",
    "path": "../public/images/Low_fidelity_mockups/check_out.png"
  },
  "/images/Low_fidelity_mockups/choose_your_favorite.png": {
    "type": "image/png",
    "etag": "\"24f01-GVBwqgTlolpUlSfKxjbAlCaCDf8\"",
    "mtime": "2021-12-21T19:47:27.559Z",
    "path": "../public/images/Low_fidelity_mockups/choose_your_favorite.png"
  },
  "/images/Low_fidelity_mockups/favorite.png": {
    "type": "image/png",
    "etag": "\"1756e-iQiOwPaawv3vYWSSceQbGaiHcwc\"",
    "mtime": "2021-12-21T19:47:27.559Z",
    "path": "../public/images/Low_fidelity_mockups/favorite.png"
  },
  "/images/Low_fidelity_mockups/live_chat.png": {
    "type": "image/png",
    "etag": "\"19e03-7btdK4pf/GW15VCifg8on1QMF5I\"",
    "mtime": "2021-12-21T19:47:27.558Z",
    "path": "../public/images/Low_fidelity_mockups/live_chat.png"
  },
  "/images/Low_fidelity_mockups/my_cart.png": {
    "type": "image/png",
    "etag": "\"18cea-VeghnXhSyzfF6sGsCp7qtSONnmg\"",
    "mtime": "2021-12-21T19:47:27.558Z",
    "path": "../public/images/Low_fidelity_mockups/my_cart.png"
  },
  "/images/Low_fidelity_mockups/recommended.png": {
    "type": "image/png",
    "etag": "\"77e4-aOni/4vzzfqogja/J4l7k5HTmYI\"",
    "mtime": "2021-12-21T19:47:27.557Z",
    "path": "../public/images/Low_fidelity_mockups/recommended.png"
  },
  "/images/Low_fidelity_mockups/sign_in-.png": {
    "type": "image/png",
    "etag": "\"5ddf-KNvXCWFXGPsFA/l1thunhu6h1hI\"",
    "mtime": "2021-12-21T19:47:27.557Z",
    "path": "../public/images/Low_fidelity_mockups/sign_in-.png"
  },
  "/images/Low_fidelity_mockups/sign_up.png": {
    "type": "image/png",
    "etag": "\"16f5f-RqRk/PkG/R6fQSbXsTDNfntyS+U\"",
    "mtime": "2021-12-21T19:47:27.556Z",
    "path": "../public/images/Low_fidelity_mockups/sign_up.png"
  },
  "/images/Usability_study/Usability_study_favorite.png": {
    "type": "image/png",
    "etag": "\"e4de-I72F3T7oRKeH/oRHSTJPlAdQLbI\"",
    "mtime": "2021-12-21T19:47:27.555Z",
    "path": "../public/images/Usability_study/Usability_study_favorite.png"
  },
  "/images/Usability_study/Usability_study_live_chat.png": {
    "type": "image/png",
    "etag": "\"8a02-dSR9iGlikP8CelcLM1b99Uqjm5Y\"",
    "mtime": "2021-12-21T19:47:27.555Z",
    "path": "../public/images/Usability_study/Usability_study_live_chat.png"
  },
  "/images/Usability_study/Usability_study_reco.png": {
    "type": "image/png",
    "etag": "\"bdce-cQH9rXxQe9DxTH5thcmOsH1R1yE\"",
    "mtime": "2021-12-21T19:47:27.554Z",
    "path": "../public/images/Usability_study/Usability_study_reco.png"
  },
  "/images/contact/contact.png": {
    "type": "image/png",
    "etag": "\"3d435-2hwZA4GUwkaP1PebxQhvaItYjsE\"",
    "mtime": "2021-12-21T19:47:27.554Z",
    "path": "../public/images/contact/contact.png"
  },
  "/images/personas/persona_1.png": {
    "type": "image/png",
    "etag": "\"21e6-GaeKZHFY7+pJ9SxWcVwPKRli05s\"",
    "mtime": "2021-12-21T19:47:27.524Z",
    "path": "../public/images/personas/persona_1.png"
  },
  "/images/personas/persona_2.png": {
    "type": "image/png",
    "etag": "\"211d-tG7WpmfmZ1SjQpEgaF/Ex2V3mI4\"",
    "mtime": "2021-12-21T19:47:27.524Z",
    "path": "../public/images/personas/persona_2.png"
  },
  "/images/personas/persona_3.png": {
    "type": "image/png",
    "etag": "\"21db-Pw1kEEAmc0bulELVC38uB4X/8Vs\"",
    "mtime": "2021-12-21T19:47:27.523Z",
    "path": "../public/images/personas/persona_3.png"
  },
  "/images/personas/persona_challenge.png": {
    "type": "image/png",
    "etag": "\"274c-YwNy8BoYLwQMtWlqK8zicpLMZAU\"",
    "mtime": "2021-12-21T19:47:27.523Z",
    "path": "../public/images/personas/persona_challenge.png"
  },
  "/images/personas/persona_hypothesis.png": {
    "type": "image/png",
    "etag": "\"2251-BJ1ePrJVMLuJXMWfjPX3ipPkHaU\"",
    "mtime": "2021-12-21T19:47:27.523Z",
    "path": "../public/images/personas/persona_hypothesis.png"
  },
  "/images/personas/persona_research.png": {
    "type": "image/png",
    "etag": "\"227a-zbYWeA++cIAeN0rz9id2z8ZvCAc\"",
    "mtime": "2021-12-21T19:47:27.522Z",
    "path": "../public/images/personas/persona_research.png"
  },
  "/images/shared/arrow.png": {
    "type": "image/png",
    "etag": "\"de8-mtL9YM/MFk93ZmU+VJkWmTdzNbI\"",
    "mtime": "2021-12-21T19:47:27.506Z",
    "path": "../public/images/shared/arrow.png"
  },
  "/images/shared/me.png": {
    "type": "image/png",
    "etag": "\"175fa-ghpkfSixgk+qF7Jg9174r91+/oQ\"",
    "mtime": "2021-12-21T19:47:27.505Z",
    "path": "../public/images/shared/me.png"
  },
  "/images/mobile/Color_mockups/blue.png": {
    "type": "image/png",
    "etag": "\"1c6e4-qtrKm9w06HB4YoTJ0nwp1kD3gyY\"",
    "mtime": "2021-12-21T19:47:27.553Z",
    "path": "../public/images/mobile/Color_mockups/blue.png"
  },
  "/images/mobile/Color_mockups/blue_reco.png": {
    "type": "image/png",
    "etag": "\"33fa2-7OCKo32J+ZvFBQEMRZypdXLNHdw\"",
    "mtime": "2021-12-21T19:47:27.552Z",
    "path": "../public/images/mobile/Color_mockups/blue_reco.png"
  },
  "/images/mobile/Color_mockups/check_out.png": {
    "type": "image/png",
    "etag": "\"3d3ad-EKzUs2+bqKP085omQYNU2mObR7I\"",
    "mtime": "2021-12-21T19:47:27.551Z",
    "path": "../public/images/mobile/Color_mockups/check_out.png"
  },
  "/images/mobile/Color_mockups/choose_your_favorite.png": {
    "type": "image/png",
    "etag": "\"3611f-gtI1acnFySvT1xyRTU4ErxvyuFw\"",
    "mtime": "2021-12-21T19:47:27.551Z",
    "path": "../public/images/mobile/Color_mockups/choose_your_favorite.png"
  },
  "/images/mobile/Color_mockups/green.png": {
    "type": "image/png",
    "etag": "\"1db78-RflWPzjLGqi690ahd+HZH0pcpu4\"",
    "mtime": "2021-12-21T19:47:27.550Z",
    "path": "../public/images/mobile/Color_mockups/green.png"
  },
  "/images/mobile/Color_mockups/green_reco.png": {
    "type": "image/png",
    "etag": "\"30657-k4+iaDwtbRFQGtI8Ze0NOhpGirU\"",
    "mtime": "2021-12-21T19:47:27.549Z",
    "path": "../public/images/mobile/Color_mockups/green_reco.png"
  },
  "/images/mobile/Color_mockups/live_chat.png": {
    "type": "image/png",
    "etag": "\"2af0c-sc+Eg21Z1y6O1IwmX/E/q7iV8YY\"",
    "mtime": "2021-12-21T19:47:27.548Z",
    "path": "../public/images/mobile/Color_mockups/live_chat.png"
  },
  "/images/mobile/Color_mockups/my_cart.png": {
    "type": "image/png",
    "etag": "\"2da75-cNnufA5yUarKrfE/MwQEx3SLnI4\"",
    "mtime": "2021-12-21T19:47:27.548Z",
    "path": "../public/images/mobile/Color_mockups/my_cart.png"
  },
  "/images/mobile/Color_mockups/orange.png": {
    "type": "image/png",
    "etag": "\"1a7bc-BfwkIZjUCIeA178Rv8NCfsptG4Q\"",
    "mtime": "2021-12-21T19:47:27.547Z",
    "path": "../public/images/mobile/Color_mockups/orange.png"
  },
  "/images/mobile/Color_mockups/orange_reco.png": {
    "type": "image/png",
    "etag": "\"37fff-cBFFJjtzvJ3pG5NC2mE1EBuydYI\"",
    "mtime": "2021-12-21T19:47:27.547Z",
    "path": "../public/images/mobile/Color_mockups/orange_reco.png"
  },
  "/images/mobile/Color_mockups/red.png": {
    "type": "image/png",
    "etag": "\"1a366-/HsaJZtSguMMf/SM13G1vlproB8\"",
    "mtime": "2021-12-21T19:47:27.546Z",
    "path": "../public/images/mobile/Color_mockups/red.png"
  },
  "/images/mobile/Color_mockups/red_reco.png": {
    "type": "image/png",
    "etag": "\"38cec-EA2POXqP0sLMvYHFyNW5uW3SW80\"",
    "mtime": "2021-12-21T19:47:27.545Z",
    "path": "../public/images/mobile/Color_mockups/red_reco.png"
  },
  "/images/mobile/Color_mockups/sign_in.png": {
    "type": "image/png",
    "etag": "\"30c55-5tYCbZ6VYotbfbENF94C0aOHxY0\"",
    "mtime": "2021-12-21T19:47:27.545Z",
    "path": "../public/images/mobile/Color_mockups/sign_in.png"
  },
  "/images/mobile/Color_mockups/sign_up.png": {
    "type": "image/png",
    "etag": "\"2f994-ytrV4Bh2l6aAudoImyrwz6GMyvY\"",
    "mtime": "2021-12-21T19:47:27.544Z",
    "path": "../public/images/mobile/Color_mockups/sign_up.png"
  },
  "/images/mobile/Crazy_8/1.png": {
    "type": "image/png",
    "etag": "\"89ff-89fJ92GSZ9ayIHLIgP/iMaswkvc\"",
    "mtime": "2021-12-21T19:47:27.543Z",
    "path": "../public/images/mobile/Crazy_8/1.png"
  },
  "/images/mobile/Crazy_8/2.png": {
    "type": "image/png",
    "etag": "\"7925-bjsxAC4BO4RQhLnflC9l8cFMVzQ\"",
    "mtime": "2021-12-21T19:47:27.542Z",
    "path": "../public/images/mobile/Crazy_8/2.png"
  },
  "/images/mobile/Crazy_8/3.png": {
    "type": "image/png",
    "etag": "\"43c7-t6vl7HjiNRaOgP+4VG3Y4eia35M\"",
    "mtime": "2021-12-21T19:47:27.542Z",
    "path": "../public/images/mobile/Crazy_8/3.png"
  },
  "/images/mobile/Crazy_8/Crazy8_favorite_shake.png": {
    "type": "image/png",
    "etag": "\"15861-ngHbSlsRuSrO+Mu1c1Uaja1/s94\"",
    "mtime": "2021-12-21T19:47:27.542Z",
    "path": "../public/images/mobile/Crazy_8/Crazy8_favorite_shake.png"
  },
  "/images/mobile/Crazy_8/Crazy8_live_chat.png": {
    "type": "image/png",
    "etag": "\"13c7c-95qIE2R665QJfbp4OoZFqYHwenI\"",
    "mtime": "2021-12-21T19:47:27.541Z",
    "path": "../public/images/mobile/Crazy_8/Crazy8_live_chat.png"
  },
  "/images/mobile/Crazy_8/Crazy8_reco.png": {
    "type": "image/png",
    "etag": "\"19741-soL+1BuNM2EBvPLKIGsH8yLzz9A\"",
    "mtime": "2021-12-21T19:47:27.541Z",
    "path": "../public/images/mobile/Crazy_8/Crazy8_reco.png"
  },
  "/images/mobile/Desk_research/Basic_user_flow.png": {
    "type": "image/png",
    "etag": "\"bb78-6JdvgovVTrmflj7JBAq3MrvkvQo\"",
    "mtime": "2021-12-21T19:47:27.540Z",
    "path": "../public/images/mobile/Desk_research/Basic_user_flow.png"
  },
  "/images/mobile/Desk_research/Graph_1.png": {
    "type": "image/png",
    "etag": "\"bcdd-U7xf7F/guAry6b6YMr3qK4T07jU\"",
    "mtime": "2021-12-21T19:47:27.539Z",
    "path": "../public/images/mobile/Desk_research/Graph_1.png"
  },
  "/images/mobile/Desk_research/Graph_2.png": {
    "type": "image/png",
    "etag": "\"6472-SqcoBUh2jG8/Z6WjfG2JGg5LVOM\"",
    "mtime": "2021-12-21T19:47:27.539Z",
    "path": "../public/images/mobile/Desk_research/Graph_2.png"
  },
  "/images/mobile/Desk_research/feature_prioritization.png": {
    "type": "image/png",
    "etag": "\"7fe4-qosrt8uWoVhOLXBoDv2vanKyBFs\"",
    "mtime": "2021-12-21T19:47:27.538Z",
    "path": "../public/images/mobile/Desk_research/feature_prioritization.png"
  },
  "/images/mobile/Desk_research/lookback.png": {
    "type": "image/png",
    "etag": "\"102fd-UttQ9fWU0t+mOJYWpI9X6qt7kBM\"",
    "mtime": "2021-12-21T19:47:27.538Z",
    "path": "../public/images/mobile/Desk_research/lookback.png"
  },
  "/images/mobile/Desk_research/themes_and_opportunities.png": {
    "type": "image/png",
    "etag": "\"29839-1YSl7QAQf3o6+HPAAG/Y0gWAkt8\"",
    "mtime": "2021-12-21T19:47:27.537Z",
    "path": "../public/images/mobile/Desk_research/themes_and_opportunities.png"
  },
  "/images/mobile/Low_fidelity_mockups/check_out.png": {
    "type": "image/png",
    "etag": "\"a379-cJ4HI6b3lhfOGWus+dYiXhMstEY\"",
    "mtime": "2021-12-21T19:47:27.536Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/check_out.png"
  },
  "/images/mobile/Low_fidelity_mockups/choose_your_favorite.png": {
    "type": "image/png",
    "etag": "\"ea69-MTXRJISqk5PSOHF4xxB1RrDNKAs\"",
    "mtime": "2021-12-21T19:47:27.536Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/choose_your_favorite.png"
  },
  "/images/mobile/Low_fidelity_mockups/favorite.png": {
    "type": "image/png",
    "etag": "\"9597-ARoE22RfTe/SdHql/cwueYlPTAo\"",
    "mtime": "2021-12-21T19:47:27.535Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/favorite.png"
  },
  "/images/mobile/Low_fidelity_mockups/live_chat.png": {
    "type": "image/png",
    "etag": "\"9454-E8uobRPT9MdYqUxty9eLcTqqmeM\"",
    "mtime": "2021-12-21T19:47:27.535Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/live_chat.png"
  },
  "/images/mobile/Low_fidelity_mockups/my_cart.png": {
    "type": "image/png",
    "etag": "\"96f6-9MyeeRdxrl9Qdf+VL5QqLO0IVw0\"",
    "mtime": "2021-12-21T19:47:27.534Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/my_cart.png"
  },
  "/images/mobile/Low_fidelity_mockups/recommended.png": {
    "type": "image/png",
    "etag": "\"3961-YMSLOEwu+8JkMZqrJVcGBN1unOw\"",
    "mtime": "2021-12-21T19:47:27.533Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/recommended.png"
  },
  "/images/mobile/Low_fidelity_mockups/sign_in-.png": {
    "type": "image/png",
    "etag": "\"2eb3-C7k65w9lW+0gbq1X42o93tSSV/g\"",
    "mtime": "2021-12-21T19:47:27.533Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/sign_in-.png"
  },
  "/images/mobile/Low_fidelity_mockups/sign_up.png": {
    "type": "image/png",
    "etag": "\"8dc6-KDN+cMzayvVRFLvw+vpGm6JHW6s\"",
    "mtime": "2021-12-21T19:47:27.533Z",
    "path": "../public/images/mobile/Low_fidelity_mockups/sign_up.png"
  },
  "/images/mobile/Usability_study/Usability_study_favorite.png": {
    "type": "image/png",
    "etag": "\"9cb5-RZ6Xx0l0LUaRb4O9N996MjxI7Sc\"",
    "mtime": "2021-12-21T19:47:27.532Z",
    "path": "../public/images/mobile/Usability_study/Usability_study_favorite.png"
  },
  "/images/mobile/Usability_study/Usability_study_live_chat.png": {
    "type": "image/png",
    "etag": "\"64d1-Jq/N1uwhE1qzMsVTVGpMpVndKSs\"",
    "mtime": "2021-12-21T19:47:27.531Z",
    "path": "../public/images/mobile/Usability_study/Usability_study_live_chat.png"
  },
  "/images/mobile/Usability_study/Usability_study_reco.png": {
    "type": "image/png",
    "etag": "\"7fec-+4ut1euYHyGI0amWRWRepIFJduQ\"",
    "mtime": "2021-12-21T19:47:27.531Z",
    "path": "../public/images/mobile/Usability_study/Usability_study_reco.png"
  },
  "/images/mobile/contact/contact.png": {
    "type": "image/png",
    "etag": "\"2719b-6/lJIjrNonUkT+EhsIAPT1GdPy8\"",
    "mtime": "2021-12-21T19:47:27.530Z",
    "path": "../public/images/mobile/contact/contact.png"
  },
  "/images/mobile/personas/persona_1.png": {
    "type": "image/png",
    "etag": "\"4e90-RRsYZgE4KysXC/4xsBbqa0zot+c\"",
    "mtime": "2021-12-21T19:47:27.529Z",
    "path": "../public/images/mobile/personas/persona_1.png"
  },
  "/images/mobile/personas/persona_2.png": {
    "type": "image/png",
    "etag": "\"523c-QJN/jk1hykqp8+qF6Ppv36kiAjo\"",
    "mtime": "2021-12-21T19:47:27.528Z",
    "path": "../public/images/mobile/personas/persona_2.png"
  },
  "/images/mobile/personas/persona_3.png": {
    "type": "image/png",
    "etag": "\"54a5-k40z/XXld9rk7FjNKtN210Q7ICM\"",
    "mtime": "2021-12-21T19:47:27.528Z",
    "path": "../public/images/mobile/personas/persona_3.png"
  },
  "/images/mobile/personas/persona_challenge.png": {
    "type": "image/png",
    "etag": "\"595b-uxycuK4VDdJhNUzWJyGLBXf5kd8\"",
    "mtime": "2021-12-21T19:47:27.528Z",
    "path": "../public/images/mobile/personas/persona_challenge.png"
  },
  "/images/mobile/personas/persona_hypothesis.png": {
    "type": "image/png",
    "etag": "\"4d85-/iG7duGQSGV5pg1qa1RD/cH8wMo\"",
    "mtime": "2021-12-21T19:47:27.527Z",
    "path": "../public/images/mobile/personas/persona_hypothesis.png"
  },
  "/images/mobile/personas/persona_research.png": {
    "type": "image/png",
    "etag": "\"5c62-APO7LokSkUqifDwQagddLeaGnHs\"",
    "mtime": "2021-12-21T19:47:27.527Z",
    "path": "../public/images/mobile/personas/persona_research.png"
  },
  "/images/mobile/shared/arrow.png": {
    "type": "image/png",
    "etag": "\"de8-mtL9YM/MFk93ZmU+VJkWmTdzNbI\"",
    "mtime": "2021-12-21T19:47:27.526Z",
    "path": "../public/images/mobile/shared/arrow.png"
  },
  "/images/mobile/shared/me.png": {
    "type": "image/png",
    "etag": "\"de76-MCiXPxVgSI5D850IUjqK+yyNYF8\"",
    "mtime": "2021-12-21T19:47:27.525Z",
    "path": "../public/images/mobile/shared/me.png"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/hayzohar/Documents/GitHub/hasida-website/dist" + "/" + "1640116045";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
