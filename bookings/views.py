from rest_framework import viewsets
from .models import Movie, Showtime, Seat, Booking
from .serializers import MovieSerializer, ShowtimeSerializer, SeatSerializer, BookingSerializer
from rest_framework.response import Response
from rest_framework.decorators import action

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class ShowtimeViewSet(viewsets.ModelViewSet):
    queryset = Showtime.objects.all()
    serializer_class = ShowtimeSerializer

class SeatViewSet(viewsets.ModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer

    @action(detail=False, methods=['get'])
    def available(self, request):
        showtime_id = request.query_params.get('showtime')
        if showtime_id:
            available_seats = self.queryset.filter(showtime_id=showtime_id, is_booked=False)
            serializer = self.get_serializer(available_seats, many=True)
            return Response(serializer.data)

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    # def perform_create(self, serializer):
    #     serializer.save()
