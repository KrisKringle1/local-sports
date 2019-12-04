<?php

if ($request['method'] === 'GET') {
  $sportType = $request['query']['sport'];
  $link = get_db_link();

<<<<<<< HEAD
  $sql = "SELECT location.name, lat, lng, `sport-type`, `event-name`, location.id, `event-day`
=======
  $sql = "SELECT location.name, lat, lng, `sport-type`, `event-name`, location.id

>>>>>>> e42630c270f77a8eef53db6ac4a8075988e6e0ed
          FROM `location-sports`
          JOIN `location`
          ON `location-sports`.`location-id`=location.id
          JOIN sports
          ON `location-sports`.`sports-id`=sports.id
          JOIN events
          ON `location-sports`.`location-id`=events.`location-id`
          JOIN `reviews`
          ON reviews.`location-id` = location.id
          JOIN `users`
          ON users.id = reviews.`user-id`

          WHERE `sport-type`=?";

  if (!isset($sportType)) {

    throw new ApiError('need a correct sport type entered');
  }

  $preparedStatement = mysqli_prepare($link, $sql);
  mysqli_stmt_bind_param($preparedStatement, 's', $sportType);
  mysqli_stmt_execute($preparedStatement);
  $result = mysqli_stmt_get_result($preparedStatement);

  // $query = $link->query($sql);
  $result = (mysqli_fetch_all($result, MYSQLI_ASSOC));
  $response['body'] = $result;
  send($response);
}

function check_connection($link)
{
  $sql = 'select 1';
  $link->query($sql);
  return [
    'message' => 'Successfully connected to MySQL!'
  ];
}
