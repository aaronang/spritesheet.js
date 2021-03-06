// create 'images' package
var masv = masv || zebra.namespace("masv");

masv("images");

(function() {
    var pkg = masv.images;

    var sheet={
        "image": "spritesheet.png",
        "frames": [
            [124, 713, 124, 50], //button
            [0, 713, 124, 50], //button_active
            [572, 649, 124, 50], //button_hover
            [0, 0, 286, 355], //character_evil
            [286, 0, 203, 346], //character_hero
            [614, 355, 23, 115], //fx_particle_bomb
            [0, 529, 190, 120], //fx_particle_boom_01
            [190, 529, 161, 102], //fx_particle_boom_02
            [480, 649, 92, 59], //fx_particle_boom_03
            [286, 346, 59, 4], //fx_particle_bullett
            [489, 218, 187, 134], //fx_particle_crash_01
            [574, 529, 99, 82], //fx_particle_crash_02
            [0, 355, 287, 174], //fx_particle_crash_03
            [688, 454, 73, 36], //fx_particle_crash_04
            [688, 220, 49, 55], //fx_particle_engine_01
            [736, 148, 25, 23], //fx_particle_engine_02
            [688, 524, 41, 34], //fx_particle_engine_03
            [688, 275, 46, 49], //fx_particle_engine_04
            [287, 355, 111, 170], //fx_particle_pow_01
            [637, 355, 49, 84], //fx_particle_pow_02
            [688, 324, 59, 45], //fx_particle_pow_03
            [391, 649, 89, 59], //fx_particle_ratata_01
            [248, 713, 85, 49], //fx_particle_ratata_02
            [688, 412, 62, 42], //fx_particle_ratata_03
            [688, 613, 52, 23], //fx_particle_ratata_04
            [729, 524, 31, 23], //fx_particle_ratata_05
            [736, 189, 17, 14], //fx_particle_ratata_06
            [736, 171, 17, 18], //fx_particle_ratata_07
            [734, 141, 7, 7], //fx_particle_shell
            [688, 75, 46, 73], //fx_particle_smoke_01
            [688, 0, 76, 75], //fx_particle_smoke_02
            [688, 558, 37, 29], //fx_particle_smoke_03
            [450, 713, 124, 46], //ship_enemy_body
            [253, 649, 138, 61], //ship_enemy_full
            [688, 636, 49, 13], //ship_enemy_gun
            [688, 490, 68, 34], //ship_enemy_wing
            [351, 529, 108, 95], //ship_giant_body
            [734, 75, 25, 42], //ship_giant_engine
            [333, 713, 117, 48], //ship_giant_floor
            [489, 0, 199, 218], //ship_giant_full
            [532, 355, 82, 129], //ship_giant_head
            [398, 355, 134, 142], //ship_giant_roof
            [574, 713, 82, 43], //ship_jet_body
            [734, 117, 30, 24], //ship_jet_engine
            [688, 587, 60, 26], //ship_jet_exhaust
            [0, 649, 138, 64], //ship_jet_full
            [398, 497, 54, 18], //ship_jet_gun
            [688, 369, 46, 43], //ship_jet_head
            [138, 649, 115, 62], //turret_enemy_base
            [459, 529, 115, 94], //turret_enemy_full
            [688, 148, 48, 72] //turret_enemy_gun
        ],
        "sprites": {
            "button":[0],
            "button_active":[1],
            "button_hover":[2],
            "character_evil":[3],
            "character_hero":[4],
            "fx_particle_bomb":[5],
            "fx_particle_boom_01":[6],
            "fx_particle_boom_02":[7],
            "fx_particle_boom_03":[8],
            "fx_particle_bullett":[9],
            "fx_particle_crash_01":[10],
            "fx_particle_crash_02":[11],
            "fx_particle_crash_03":[12],
            "fx_particle_crash_04":[13],
            "fx_particle_engine_01":[14],
            "fx_particle_engine_02":[15],
            "fx_particle_engine_03":[16],
            "fx_particle_engine_04":[17],
            "fx_particle_pow_01":[18],
            "fx_particle_pow_02":[19],
            "fx_particle_pow_03":[20],
            "fx_particle_ratata_01":[21],
            "fx_particle_ratata_02":[22],
            "fx_particle_ratata_03":[23],
            "fx_particle_ratata_04":[24],
            "fx_particle_ratata_05":[25],
            "fx_particle_ratata_06":[26],
            "fx_particle_ratata_07":[27],
            "fx_particle_shell":[28],
            "fx_particle_smoke_01":[29],
            "fx_particle_smoke_02":[30],
            "fx_particle_smoke_03":[31],
            "ship_enemy_body":[32],
            "ship_enemy_full":[33],
            "ship_enemy_gun":[34],
            "ship_enemy_wing":[35],
            "ship_giant_body":[36],
            "ship_giant_engine":[37],
            "ship_giant_floor":[38],
            "ship_giant_full":[39],
            "ship_giant_head":[40],
            "ship_giant_roof":[41],
            "ship_jet_body":[42],
            "ship_jet_engine":[43],
            "ship_jet_exhaust":[44],
            "ship_jet_full":[45],
            "ship_jet_gun":[46],
            "ship_jet_head":[47],
            "turret_enemy_base":[48],
            "turret_enemy_full":[49],
            "turret_enemy_gun":[50]
        }
    };
    var atlas = new Image();
    atlas.src=sheet.image;

    var process = function(coords) { return new zebra.ui.Picture(atlas, coords[0], coords[1], coords[2], coords[3])};
    var evalStr='';
    for (var i=0;i<sheet.frames.length;i++) evalStr+='pkg.'+Object.keys(sheet.sprites)[i]+'=process(['+sheet.frames[i]+']);';
    eval(evalStr);
}());
