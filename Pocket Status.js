/*

              -- PocketABC --
       -- Pocket Status 1.0 Beta --
-- NetFlat | Todos os direitos reservados --
   -- Criado por MineDog (@MineDogYT11)--

*/

function newLevel(){
    clientMessage("[@] Pocket Status - 1.0 Beta");
}

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "status"){
        clientMessage("Minecraft: Pocket Edition - 0.14.0");
        clientMessage("Localização atual - XYZ: " + Math.round(Player.getX()) + ", " + Math.round(Player.getY()) + ", " + Math.round(Player.getZ()) + " - Bioma: " + Level.getBiomeName());
        clientMessage("Brilho/Luminosidade: " + Level.getBrightness(Player.getX(), Player.getY(), Player.getZ()) + " - Horário do jogo: " + Level.getTime());
        clientMessage("Modo de jogo: (1 = Criativo / 0 = Sobrevivência) " + Level.getGameMode();
    }
}
