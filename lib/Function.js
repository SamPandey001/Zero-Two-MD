var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod }
}
Object.defineProperty(exports, "__esModule", { value: true })

const axios = require("axios")
const cheerio = require("cheerio")
const { resolve } = require("path")
const util = require("util")


exports.getRandom = (ext, length = "10") => {
    var result = ""
    var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    var characterLength = character.length
    for (var i = 0; i < length; i++) {
        result += character.charAt(Math.floor(Math.random() * characterLength))
    }

    return `${result}.${ext}`
}

exports.fetchBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url,
			headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchUrl = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.WAVersion = async () => {
    let get = await exports.fetchUrl("https://web.whatsapp.com/check-update?version=1&platform=web")
    let version = [get.currentVersion.replace(/[.]/g, ", ")]
    return version
}

exports.runtime = (seconds) => {
    seconds = Number(seconds)
	var d = Math.floor(seconds / (3600 * 24))
	var h = Math.floor(seconds % (3600 * 24) / 3600)
	var m = Math.floor(seconds % 3600 / 60)
	var s = Math.floor(seconds % 60)
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : ""
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : ""
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : ""
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : ""
	return dDisplay + hDisplay + mDisplay + sDisplay
}

exports.clockString = (ms) => {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'gi'))
}

exports.checkPrefix = (prefix, body) => {
    if (!body) return false
    if (typeof prefix == "string") {
        return {
            match: body.startsWith(prefix),
            prefix: prefix,
            body: body.replace(prefix, "")
        }
    } else if (typeof prefix == "object") {
        if (Array.isArray(prefix)) {
            for (const value of prefix) {
                if (typeof value == "string") {
                    if (body.startsWith(value)) return {
                        match: true,
                        prefix: value,
                        body: body.replace(value, "")
                    }
                } else if (typeof value == "object") {
                    if (value instanceof RegExp) {
                        if (body.match(value)) return {
                            match: true,
                            prefix: (value.exec(body))?.[0],
                            body: body.replace(value, "")
                        }
                    }
                }
            }
        } else if (prefix instanceof RegExp) {
            if (body.match(prefix)) return {
                match: true,
                prefix: (prefix.exec(body))?.[0],
                body: body.replace(prefix, "")
            }
        }
    }
    return false
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.isNumber = (number) => {
    const int = parseInt(number)
    return typeof int === 'number' && !isNaN(int)
}
