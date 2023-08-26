import json
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import re

# Загрузка данных из JSON-файла
places_data = '''
[
  {
    "place_id": 1,
    "name": "Музей искусства",
    "description": "Музей искусства представляет коллекцию произведений известных художников."
  },
  {
    "place_id": 2,
    "name": "Исторический парк",
    "description": "Исторический парк расположен на месте древнего поселения и предлагает уникальные экспозиции и маршруты."
  },
  {
    "place_id": 3,
    "name": "Ботанический сад",
    "description": "Ботанический сад предлагает разнообразие растений и прекрасные пейзажи на своей территории."
  },
  {
    "place_id": 4,
    "name": "Планетарий",
    "description": "Планетарий представляет уникальное кинематографическое шоу о космосе и астрономии."
  }
]
'''
places = json.loads(places_data)

# Преобразование данных в pandas DataFrame
data = pd.DataFrame(places)

# Функция для предобработки текстовых данных
def preprocess_text(text):
    text = text.lower() # Приведение к нижнему регистру
    text = re.sub(r'\W', ' ', text) # Удаление специальных символов
    text = re.sub(r'\s+', ' ', text) # Удаление лишних пробелов
    return text

# Предобработка предпочтений пользователя
user_preferences = ['музей', 'история']
user_preferences_processed = [preprocess_text(preference) for preference in user_preferences]

# Создание векторизатора и матрицы признаков
count_vectorizer = CountVectorizer()
features = count_vectorizer.fit_transform(data['description'].apply(preprocess_text))

# Создание вектора предпочтений пользователя
user_preferences_vector = count_vectorizer.transform(user_preferences_processed)

# Рассчет сходства между вектором предпочтений пользователя и матрицей признаков
similarity_scores = cosine_similarity(user_preferences_vector, features)

# Сортировка и получение рекомендаций
recommendations = [(index, similarity_scores[0, index]) for index in range(len(data))]
recommendations = sorted(recommendations, key=lambda x: x[1], reverse=True)

# Рекомендуемые места для пользователя
recommended_places = [data.iloc[index]['name'] for index, score in recommendations]
print(recommended_places)