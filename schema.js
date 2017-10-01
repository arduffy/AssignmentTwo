var mongoose= require("MongoDB");

var Schema = new mongoose.Schema;

var clmbSchema= new Schema[{
    weight: number,
    vfriflap5: number,
    vfriflap10: number,
    vfriflap15: number,
    vclmb: number
}];

var takeoffSchema = new Schema[{
        weight: number,
            atbelow20[
                oat0: string,
                oat2000: string,
                oat4000: string,
                oat6000: string,
                oat8000: string,
                oat10000: string
                ]
                
            above20[
                oat0: string,
                oat2000: string,
                oat4000: string,
                oat6000: string,
                oat8000: string,
                oat10000: string
                ]
}]

var landingSchema = new Schema[{
            weight: number
            [
                vapp: number,
                vref: string,
                vga: number
            ]
}]
