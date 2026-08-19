-- Essential: Seed the random number generator so you don't get the same colors every run
math.randomseed(os.time())

local function generateRandomColor()
	local letters = "0123456789ABCDEF"
	local color = "#"

	for i = 1, 6 do
		-- math.random(1, 16) generates a whole number from 1 to 16 natively
		local random_index = math.random(1, 16)

		-- Extract the single character at that index
		local random_char = string.sub(letters, random_index, random_index)

		-- Append the character to the color string
		color = color .. random_char
	end

	return color
end

print(generateRandomColor())
