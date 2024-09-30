from rest_framework import serializers
from .models import Movie, Showtime, Seat, Booking

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class ShowtimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Showtime
        fields = '__all__'

class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    movie_name = serializers.CharField(source='movie.title')  # Adjust 'movie.title' based on your actual field name

    class Meta:
        model = Booking
        fields = ['id', 'movie_name', 'seats', 'showtime', 'booking_date']


