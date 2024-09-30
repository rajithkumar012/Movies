from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    poster_url = models.URLField()

    def __str__(self):
        return self.title

class Showtime(models.Model):
    movie = models.ForeignKey(Movie, related_name='showtimes', on_delete=models.CASCADE)
    time = models.DateTimeField()

class Seat(models.Model):
    seat_number = models.CharField(max_length=5)
    is_booked = models.BooleanField(default=False)
    showtime = models.ForeignKey(Showtime, related_name='seats', on_delete=models.CASCADE)

class Booking(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    seats = models.JSONField()
    showtime = models.ForeignKey(Showtime, on_delete=models.CASCADE, default=1)  # Replace 1 with a valid Showtime ID
    booking_date = models.DateTimeField(auto_now_add=True)


