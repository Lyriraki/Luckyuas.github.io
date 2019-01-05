function tampilgame(perusahaan) {
    var game = "";
    switch (perusahaan) {
        case "Square":
            {
                game = "<ul> \
                <li>Final Fantasy</li> \
                <li>Dragon Quest</li> \
                <li>Sleeping Dog</li> \
                    </ul>"
            }
            break;

        case "Ubisoft":
            {
                game = "<ul> \
                <li>Assassin's Creed</li> \
                <li>Far Cry</li> \
                <li>Prince of Persia</li> \
            </ul>"
            }
            break;
        case "Ea":
            {
                game = "<ul> \
                <li>Battlefield</li> \
                <li>FIFA</li> \
                <li>Mass Effect</li> \
                    </ul>"
            }
            break;

        case "Namco":
            {
                game = "<ul> \
                <li>Naruto</li> \
                <li>Dragon Ball</li> \
                <li>Tekken</li> \
            </ul>"
            }
            break;
        case "Nintendo":
            {
                game = "<ul> \
                <li>Super Mario</li> \
                <li>Zelda</li> \
                <li>Donkey Kong</li> \
                    </ul>"
            }
            break;

        case "Sony":
            {
                game = "<ul> \
                <li>God Of War</li> \
                <li>Ace Combat</li> \
                <li>The Last Of Us</li> \
            </ul>"
            }
            break;
        default:
            game = "";
    }
    document.getElementById('game').innerHTML = game;
}