    /*
        [zombies, range, ammo].

        // 遊戲終止，判定狀況
        if zombies === 0 then return "You shot all X zombies." case 1
        else 
            if(range === 0) return "You shot X zombies before being eaten: overwhelmed." case 2
            if ammo === 0 return "You shot X zombies before being eaten: ran out of ammo." case 3
    */

   function zombie_shootout(zombies, range, ammo) {
    let hit = 0;
    while(true){
        if(!zombies || !ammo || !range) break;
 
        zombies--;
        ammo--;
        range -= 0.5;
        hit++;
    }
 
    return (!zombies) ? `You shot all ${hit} zombies.`:
           (!range) ? `You shot ${hit} zombies before being eaten: overwhelmed.`:
           `You shot ${hit} zombies before being eaten: ran out of ammo.`;
 }

 // 優化版本
 function zombie_shootout(zombies, range, ammo) {
    const steps = range*2;

    if(ammo < steps && zombies > ammo) return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    if(zombies > steps) return `You shot ${steps} zombies before being eaten: overwhelmed.`;

    return `You shot all ${zombies} zombies.`;
 }