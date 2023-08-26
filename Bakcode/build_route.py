import json 
from math import sin, cos, sqrt, atan2, radians
import webbrowser
import datetime

def get_data():
    json_string = '''
    {
        "places": [
                {
                    "id" : 0,
                    "category": "исторический",
                    "name": "Музей истории",
                    "opening_time": "08:00",
                    "closing_time": "21:00",
                    "price": 150,
                    "koorX": 47.207044,
                    "koorY":  38.931214
                },
                {
                    "id" : 1,
                    "category": "еда",
                    "name": "Калипсо",
                    "opening_time": "10:00",
                    "closing_time": "23:00",
                    "price": 1500,
                    "koorX": 47.253690,
                    "koorY":  38.917754
                },
                {
                    "id" : 2,
                    "category": "развлечения",
                    "name": "Колесо обозрения",
                    "opening_time": "08:00",
                    "closing_time": "18:00",
                    "price": 150,
                    "koorX": 47.218636,
                    "koorY":  38.924869
                },
                {
                    "id" : 3,
                    "category": "развлечения",
                    "name": "Рынок",
                    "opening_time": "14:00",
                    "closing_time": "18:00",
                    "price": 150,
                    "koorX": 47.212978,
                    "koorY":  38.917765
                }
            ]
        }
        '''

    data = json.loads(json_string)
    places = data['places']
    return places


# оределение расстояния
def get_distance(x1,y1, x2,y2):
    lat1 = radians(x1)
    lon1 = radians(y1)
    lat2 = radians(x2)
    lon2 = radians(y2)

    R = 6371.0
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = R * c
    return distance

# создание массива в котором дистанции от пользователя до каждой точки 
def get_mass_distance(places, user_koorX, user_koorY):
    mass = []
    for obj in places:
        distance = get_distance(user_koorX,user_koorY, obj["koorX"],obj["koorY"])
        mass.append(distance)
    return mass

# создание приоритетов по дистанциям
def get_priority(mass):
    mass2 = mass[:]
    arr = []
    for obj in range(0, len(mass)): 
        index = mass.index(min(mass2))
        arr.append(index)
        mass2.pop(mass2.index(min(mass2))) 
    return arr

# открыть карту
def carta(arr_koor, user_koorY, user_koorX):
    def open_yandex_maps(points, zoom):
        coordinates = "~".join([f"{point[1]},{point[0]}" for point in points])
        url = f"https://yandex.ru/maps/?rtext={coordinates}&rtt=auto"
        webbrowser.open(url)


    # Задаем точки маршрута
    points = []
    points.append([user_koorY, user_koorX])
    for i in arr_koor:
        points.append(i)
    # print(points)

    # Открываем яндекс карты с маршрутом 10 - зум карты
    open_yandex_maps(points, 10)


def main():
    print("\n")

    user_koorX = 47.207962
    user_koorY = 38.921563  

    user_time = "14:30"
    user_time = datetime.datetime.strptime(user_time, "%H:%M").time()
    print("Время пользователя",user_time)

    # print("дистанции", get_mass_distance(get_data(), user_koorX, user_koorY))
    arr_index = get_priority(get_mass_distance(get_data(), user_koorX, user_koorY))
    arr_koor = []
    temp = []
    print("индексы ",arr_index)
    arr_index2 = []

    print("\n")
    for i in range(0, len(arr_index)):
        print(get_data()[arr_index[i]]["name"])
        time_str = get_data()[arr_index[i]]["opening_time"]
        time_obj1 = datetime.datetime.strptime(time_str, "%H:%M").time()
        print("Время открытия:", time_obj1)
        time_str = get_data()[arr_index[i]]["closing_time"]
        time_obj2 = datetime.datetime.strptime(time_str, "%H:%M").time()
        print("Время закрытия:", time_obj2)

        if(user_time >= time_obj2):
            print("Закрыт до завтра")
            arr_index2.append([arr_index[i],0])
            # arr_index[i] = -1
        else:
            if(time_obj1 <= user_time):
                print("можно посещать")
                arr_index2.append([arr_index[i],2])
            else:  
                print("еще закрыто")
                arr_index2.append([arr_index[i],1])
                # element = arr_index.pop(i)  # Удаление элемента по индексу и сохранение его в переменную
                # arr_index.append(element)  # Добавление элемента в конец массива

        print("-------------------------")
    print("индексы2 ",arr_index2)

    for i in range(0, len(arr_index2)):
        if arr_index2[i][1] == 1:
            element = arr_index2.pop(i)  # Удаление элемента по индексу и сохранение его в переменную
            arr_index2.append(element)  # Добавление элемента в конец массива
    print("индексы2 ",arr_index2)
    
    for i in range(0, len(arr_index2)):
        if arr_index2[i][1] == 2:
            temp = [get_data()[arr_index2[i][0]]["koorY"], get_data()[arr_index2[i][0]]["koorX"]]
            arr_koor.append(temp)
        elif arr_index2[i][1] == 1:
            temp = [get_data()[arr_index2[i][0]]["koorY"], get_data()[arr_index2[i][0]]["koorX"]]
            arr_koor.append(temp)


    print("координаты на карту", arr_koor)


    # запускаем карту
    carta(arr_koor, user_koorY, user_koorX)
    



if __name__ == "__main__":
    main()


    

