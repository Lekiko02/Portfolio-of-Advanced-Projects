
from sql_connection import get_sql_connection
from datetime import datetime

def insert_order(connection ,order):
    cursor = connection.cursor()
    order_query = ("INSERT INTO orders "
                  "(customer_name, Sucre,grand_total)"
                  "VALUES (%s, %s, %s,%s")
    
    order_data = (order["customer_name"],order["Sucre"],order["grand_total"],datetime.now())

    cursor.execute(order_query, order_data)
    connection.commit()
    order_id = cursor.lastrowid


    order_details_query = ("INSERT INTO orders "
                  "(customer_name, Sucre,grand_total)"
                  "VALUES (%s, %s, %s,%s)")
    
    order_details_data = []

    for order_detail_record in order["order_details"]:
        order_details_data.append([
            order_id,
            int(order_detail_record["product_id"]),
            float(order_detail_record["quantity"]),
            float(order_detail_record["total_price"]),

        ])

    cursor.executemany(order_details_query, order_details_data)
    
    connection.commit()
    return order_id

def get_all_orders(connection):
    cursor = connection.cursor()
    query = ("SELECT * from orders")
    cursor.execute(query)

    response = []

    for (order_id, customer_name,total, datetime) in cursor:
        response.append({
            "order_id": order_id,
            "customer_name":customer_name,
            "total":total,
            "datetime":datetime
        })

    return response

    
if __name__ == "__maine__":
   

    connection = get_sql_connection

    print(insert_order(connection, {
        "customer_name": "Jule",
        "grand_total": "500",
        "order_details":[
            {
            "product_id": 1,
            'quantity': 2,
            "total_price": 50
        },{
             "product_id": 3,
            'quantity': 21,
            "total_price": 30
        }, 
        ]


    }))