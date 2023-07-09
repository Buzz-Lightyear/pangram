from wordfreq import zipf_frequency

with open('resources/words_alpha.txt', 'r') as f:
	words = [word.rstrip() for word in f.readlines() if len(word) == 10]

word_freq = {}
for word in words:
	word_freq[word] = zipf_frequency(word, 'en')

word_freq = {k: v for k, v in sorted(word_freq.items(), key=lambda item: item[1], reverse=True)}

final_words = []
i = 0
for word in word_freq:
	final_words.append(word)
	if i == 8000:
		break
	i += 1

with open('resources/words.txt', 'w') as f:
	f.write('\n'.join(final_words))